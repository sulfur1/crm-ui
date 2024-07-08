import {Component, Input} from '@angular/core';
import {Product} from "../../data/interfaces/product.interface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
}
