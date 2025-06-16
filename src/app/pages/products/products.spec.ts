import { TestBed } from '@angular/core/testing';
import { ProductsService } from '../../services/products';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products', () => {
    const products = service.getProducts();
    expect(products.length).toBeGreaterThan(0);
  });
});
