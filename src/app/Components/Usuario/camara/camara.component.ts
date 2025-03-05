import { Component, inject } from '@angular/core';
import { CameraService } from '../../../services/camera.service';
import { PhotoService } from '../../../services/photo.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-camara',
  standalone: true,
  imports: [NgIf],
  templateUrl: './camara.component.html',
  styleUrl: './camara.component.css'
})
export class CameraComponent {
  cameraService = inject(CameraService);
  photoService = inject(PhotoService);
  imgUrl: string = '';
  errorMessage: string = '';
  loading: boolean = false;
  title: string = ''; // Nuevo campo para el título

  async takePicture() {
    this.errorMessage = ''; // Limpiar errores anteriores
  
    try {
      this.loading = true;
      this.imgUrl = await this.cameraService.takePicture();
  
      if (!this.imgUrl) {
        throw new Error('No se obtuvo una imagen válida');
      }
  
      const title = prompt('Ingresa un título para la imagen:')?.trim();
      if (!title) {
        throw new Error('No se ingresó un título válido');
      }
  
      const userId = 'default-user'; // Puedes cambiar esto cuando manejes autenticación
  
      this.photoService.addPhoto(this.imgUrl, title, userId); // Pasar userId también
      this.loading = false;
    } catch (error) {
      console.error('Error al capturar imagen:', error);
      this.errorMessage = String(error);
      this.imgUrl = '';
      this.loading = false;
    }
    
  }
  
}
