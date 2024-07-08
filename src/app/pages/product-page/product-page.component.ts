import {Component, inject} from '@angular/core';
import {ProductService} from "../../data/services/product.service";
import {Product} from "../../data/interfaces/product.interface";
import {ProductCardComponent} from "../../cards/product-card/product-card.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  productService = inject(ProductService);
  products: Product[] = [];

  constructor() {
    this.productService.getProducts()
      .subscribe(val => {
        this.products = val
      })
  }
}
