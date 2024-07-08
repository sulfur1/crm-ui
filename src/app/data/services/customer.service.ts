import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../interfaces/customer.interface";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  http = inject(HttpClient)

  // customerApiUrl = "http://localhost:8080/api/v1/"
  customerApiUrl = "https://localhost/api/v1/"

  getCustomers() {
    return this.http.get<Customer[]>(`${this.customerApiUrl}customers`)
  }
}
