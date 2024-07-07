import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CustomerService} from "./data/services/customer.service";
import {JsonPipe} from "@angular/common";
import {Customer} from "./data/interfaces/customer.interface";
import {CustomerCardComponent} from "./customer-card/customer-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, CustomerCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crm-ui';
  customerService = inject(CustomerService);
  customers: Customer[] = []

  constructor() {
    this.customerService.getCustomers()
      .subscribe(val => {
        this.customers = val
      })
  }
}
