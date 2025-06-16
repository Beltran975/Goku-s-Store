import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  detalles?: string;         
  caracteristicas?: string[]; 
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
  private products: Product[] = [
  {
    id: 1,
    nombre: 'Singlet SBD',
    descripcion: 'Ideal para competir',
    precio: 6500,
    imagen: '/img/honda-transalp.jpg',
    detalles: 'Singlet fabricado con materiales transpirables y resistentes para competencias de alto rendimiento.',
    caracteristicas: [
      'Material transpirable',
      'Costuras reforzadas',
      'Diseño ergonómico',
      'Disponible en varias tallas'
    ]
  },
  {
    id: 2,
    nombre: 'Belt SBD',
    descripcion: 'Resistente y elegante',
    precio: 9200,
    imagen: '/img/kawasaky 600.jpg',
    detalles: 'Cinturón con soporte lumbar para máxima seguridad en levantamientos pesados.',
    caracteristicas: [
      'Hebilla metálica de alta resistencia',
      'Correa ajustable',
      'Material duradero y flexible',
      'Diseño anatómico'
    ]
  },
  {
    id: 3,
    nombre: 'Straps SBD',
    descripcion: 'Modernos y duraderos',
    precio: 3900,
    imagen: '/img/kawasaky-kx250.jpg',
    detalles: 'Straps diseñados para un agarre firme y cómodo en entrenamientos intensos.',
    caracteristicas: [
      'Tejido resistente al desgaste',
      'Cierre seguro',
      'Fácil ajuste',
      'Ligero y flexible'
    ]
  },
  {
    id: 4,
    nombre: 'Muñequeras SBD',
    descripcion: 'Durabilidad y estética',
    precio: 13900,
    imagen: '/img/suzuki-1200.jpg',
    detalles: 'Muñequeras diseñadas para proteger y estabilizar las muñecas durante levantamientos y entrenamientos.',
    caracteristicas: [
      'Material resistente al sudor',
      'Cierre de velcro fuerte',
      'Cómodas y ajustables',
      'Diseño ergonómico'
    ]
  },
  {
    id: 5,
    nombre: 'Coderas SBD',
    descripcion: 'Máximo soporte',
    precio: 13900,
    imagen: '/img/coderas.jpg',
    detalles: 'Coderas que ofrecen soporte superior para prevenir lesiones en codos durante el entrenamiento.',
    caracteristicas: [
      'Compresión ajustable',
      'Material resistente y elástico',
      'Fácil de poner y quitar',
      'Alta durabilidad'
    ]
  }
]

  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
}
