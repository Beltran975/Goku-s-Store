import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  nombre:string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      nombre: 'Singlet SBD',
      descripcion : 'Ideal para competir',
      precio: 6500,
      imagen: '/img/honda-transalp.jpg'
    },
    {
      id: 2,
      nombre: 'Belt SBD',
      descripcion: 'Resistente y elegante',
      precio: 9200,
      imagen: '/img/kawasaky 600.jpg'
    },
    {
      id: 3,
      nombre: 'Straps SBD',
      descripcion: 'Modernos y duraderos',
      precio: 3900,
      imagen: '/img/kawasaky-kx250.jpg'
    },
   {
      id: 4,
      nombre: 'Muñequeras SBD',
      descripcion: 'Durabilidad y estetica',
      precio: 13900,
      imagen: '/img/suzuki-1200.jpg'
   },
   {
      id: 5,
      nombre: 'Coderas SBD',
      descripcion: 'Maximo soporte',
      precio: 13900,
      imagen: '/img/coderas.jpg'
   }
  ]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
}
