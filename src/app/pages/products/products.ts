import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Product, ProductsService } from '../../services/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  standalone: true, 
  imports: [CommonModule],  
  providers: [ProductsService] 
})
export class ProductsComponent implements OnInit {
  productos: Product[] = [];
  productoSeleccionado: Product | null = null;
  modalVisible = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productos = this.productsService.getProducts();
  }

  trackById(index: number, producto: Product): number {
    return producto.id;
  }

  abrirModal(producto: Product) {
    this.productoSeleccionado = producto;
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
    this.productoSeleccionado = null;
  }
}
