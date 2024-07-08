import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient)

  customerApiUrl = "https://localhost/api/v1/"

  getProducts() {
    return this.http.get<Product[]>(`${this.customerApiUrl}products/all`)
  }
}
