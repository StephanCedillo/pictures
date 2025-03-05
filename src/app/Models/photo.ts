export interface Photo {
  id: string; // ID del documento en Firestore
  title: string; // Título de la imagen
  url: string; // URL de la imagen en Firebase Storage
  userId?: string; // ID del usuario que subió la imagen
  createdAt: Date; // Fecha de creación
  // Nuevas propiedades para filtros
  filter: string;
  opacity: number;
  darkness: number;
}
