import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Inquiry} from "../interfaces/inquiry.interface";
import {ProductService} from "./product.service";
import {forkJoin, map, Observable, switchMap} from "rxjs";
import {CustomerService} from "./customer.service";

@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  http = inject(HttpClient)

  productService = inject(ProductService);
  customerService = inject(CustomerService);

  inquiryApiUrl = "https://localhost/api/v1/"

  getInquiries(): Observable<Inquiry[]> {
    return this.http.get<Inquiry[]>(`${this.inquiryApiUrl}inquiries`).pipe(
      switchMap((inquiries: Inquiry[]) => {
        const inquiryObservables = inquiries.map(inquiry =>
          forkJoin({
            product: this.productService.getProductById(inquiry.productRefId),
            customer: this.customerService.getCustomerById(inquiry.customerRefId)
          }).pipe(
            map(({ product, customer }) => ({
              ...inquiry,
              product,
              customer
            }))
          )
        );
        return forkJoin(inquiryObservables);
      })
    );
  }

}
