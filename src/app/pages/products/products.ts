import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../services/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {
  productos: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productos = this.productsService.getProducts();
  }

  trackById(index: number, producto: Product): number {
    return producto.id;
  }
}
