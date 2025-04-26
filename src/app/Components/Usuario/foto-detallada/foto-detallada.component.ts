// Suggested code may be subject to a license. Learn more: ~LicenseLog:836371845.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PhotoService } from '../../../services/photo.service';
import { Photo } from '../../../Models/photo';
import { FormsModule, NgModel } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { NgIf } from '@angular/common';
import { DarknessFilterPipe } from '../../../darkness-filter.pipe';
@Component({
  selector: 'app-foto-detallada',
  imports: [FormsModule,NgIf, DarknessFilterPipe,RouterModule],
  templateUrl: './foto-detallada.component.html',
  styleUrl: './foto-detallada.component.css'
})
export class FotoDetalladaComponent implements OnInit, PipeTransform{
  transform(value: string, darkness: number): string {
    // 'darkness' es el valor que vas a aplicar al filtro (de 0 a 1)
    return `brightness(${darkness})`;
  }

  photo: Photo | null = null;  // Almacenará la foto detallada
  photoId: string | null = null;


loadPhotoDetails(photoId: string): void {
  this.photo = this.photoService.getPhotoById(photoId);
  if (this.photo) {
    // Cargar los filtros aplicados previamente
    this.filter = this.photo.filter || '';
    this.opacity = this.photo.opacity || 1;
    this.darkness = this.photo.darkness || 0;
  }
}

  
  filter: string = '';
  opacity: number = 1; // Opacidad de la foto
  darkness: number = 0; // Oscuridad de la foto

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.photoId = params.get('id');
      if (this.photoId) {
        this.loadPhotoDetails(this.photoId);
      }
    });
    
  }

  applyFilter(event: Event): void {
    const target = event.target as HTMLSelectElement | null; // Asegúrate de que target sea un select
    if (target) {
      const value = target.value;
      this.filter = value;
      console.log(value); // Verifica si el valor se obtiene correctamente
      this.cdr.detectChanges();
    }
  }
  
  // Método para aplicar filtros a la URL de la imagen
  applyFilters(url: string): string {
    let updatedUrl = url;
    // Aplica los filtros de manera condicional según las opciones seleccionadas
    if (this.filter) {
      updatedUrl = `${updatedUrl}?filter=${this.filter}`;
    }
    if (this.opacity !== 1) {
      updatedUrl = `${updatedUrl}&opacity=${this.opacity}`;
    }
    if (this.darkness > 0) {
      updatedUrl = `${updatedUrl}&darkness=${this.darkness}`;
    }
    return updatedUrl;  // Devuelve la URL con los filtros aplicados
  }
  
  
  
  
  applyOpacity(opacity: number): void {
    this.opacity = opacity;
  }

  applyDarkness(darkness: number): void {
    this.darkness = darkness;
  }
  // Método para actualizar la foto editada
  updatePhoto(): void {
    if (this.photo) {
      // Actualizar la foto con los filtros aplicados
      this.photo.filter = this.filter;
      this.photo.opacity = this.opacity;
      this.photo.darkness = this.darkness;

      this.photoService.updatePhoto(this.photo);  // Guardar la foto actualizada en el servicio
      this.router.navigate(['/user']);  // Redirigir a la galería
    }
  }
  
}
