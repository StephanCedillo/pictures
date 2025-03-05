import { Injectable } from '@angular/core';
import { Photo } from '../Models/photo';
import { v4 as uuidv4 } from 'uuid'; // Para generar IDs únicos

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photos: Photo[] = [];

  addPhoto(photoUrl: string, title: string, userId: string) { // Agregar userId como parámetro
    const newPhoto: Photo = {
      id: uuidv4(), // Genera un ID único
      title,
      url: photoUrl,
      userId, // Ahora se incluye userId
      createdAt: new Date(), // Guarda la fecha actual
      filter: '',   // Inicializa los filtros vacíos
      opacity: 1,
      darkness: 0
    };

    this.photos.unshift(newPhoto); // Agregar al inicio de la lista
  }

  getPhotos(): Photo[] {
    return this.photos;
  }
  getPhotoById(id: string): Photo | null {
    return this.photos.find(photo => photo.id === id) || null; // Asegúrate de que 'id' sea un campo único en tu modelo
  }
  updatePhoto(updatedPhoto: Photo): void {
    const index = this.photos.findIndex(photo => photo.id === updatedPhoto.id);
    if (index !== -1) {
      // Actualizar los filtros junto con los demás campos
      this.photos[index] = updatedPhoto;
      console.log('Foto actualizada:', updatedPhoto);
    }
  }
  
}
