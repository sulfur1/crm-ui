import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient)

  productApiUrl = "https://localhost/api/v1/"

  getProducts() {
    return this.http.get<Product[]>(`${this.productApiUrl}products/all`)
  }

  getProductById(productId: number) {
    return this.http.get<Product>(`${this.productApiUrl}products/${productId}`)
  }
}
