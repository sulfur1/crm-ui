import {Component, inject} from '@angular/core';
import {CustomerService} from "../../data/services/customer.service";
import {Customer} from "../../data/interfaces/customer.interface";
import {CustomerCardComponent} from "../../customer-card/customer-card.component";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    CustomerCardComponent
  ],

  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
    customerService = inject(CustomerService);
    customers: Customer[] = [];

    constructor() {
      this.customerService.getCustomers()
      .subscribe(val => {
        this.customers = val
      })
    }
}
