import { Component, inject } from '@angular/core';
import { PhotoService } from '../../../services/photo.service';
import { Photo } from '../../../Models/photo';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-galeria',
  imports: [NgFor, CommonModule, FormsModule, RouterModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  searchTitle: string = '';  // Para buscar por nombre
  searchDate: string = '';   // Para buscar por fecha
  allPhotos: Photo[] = [];   // Aquí almacenamos todas las fotos
  filteredPhotos: Photo[] = []; // Aquí almacenamos las fotos filtradas

  constructor(private photoService: PhotoService, private router: Router) {
    this.allPhotos = this.photoService.getPhotos();
    this.filteredPhotos = this.allPhotos;  // Inicia mostrando todas las fotos
  }

  // Método para aplicar los filtros de búsqueda
  applyFilters(): void {
    let photos = this.allPhotos;
    
    // Filtrar por título si hay un término de búsqueda
    if (this.searchTitle) {
      photos = photos.filter(photo =>
        photo.title.toLowerCase().includes(this.searchTitle.toLowerCase())
      );
    }
    
    // Filtrar por fecha si se seleccionó una fecha
    if (this.searchDate) {
      const selectedDate = this.searchDate;
      
      const startOfDay = new Date(selectedDate);
      startOfDay.setHours(0, 0, 0, 0);  // Hora a las 00:00:00
      
      const endOfDay = new Date(selectedDate);
      endOfDay.setHours(23, 59, 59, 999);  // Hora a las 23:59:59.999
      
      // Filtrar las fotos por fecha
      photos = photos.filter(photo => {
        const photoDate = new Date(photo.createdAt);
        return photoDate >= startOfDay && photoDate <= endOfDay;
      });
    }
    
    this.filteredPhotos = photos;  // Actualiza las fotos filtradas
  }

  // Método para ver detalles de la foto y navegar a la vista de detalle
  viewPhotoDetail(photoId: string): void {
    this.router.navigate(['/user/photo', photoId]); // Navegamos a la vista detallada de la foto
  }

  // Método para agrupar las fotos en filas (opcional)
  groupPhotos(photos: Photo[], groupSize: number): Photo[][] {
    const groups: Photo[][] = [];
    for (let i = 0; i < photos.length; i += groupSize) {
      groups.push(photos.slice(i, i + groupSize));
    }
    return groups;
  }
}