import {Component, Input, input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Inquiry} from "../../data/interfaces/inquiry.interface";

@Component({
  selector: 'app-inquiry-card',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './inquiry-card.component.html',
  styleUrl: './inquiry-card.component.scss'
})
export class InquiryCardComponent {
  @Input() inquiry!: Inquiry | undefined;

  get managerRefId(): number | undefined {
    return this.inquiry?.managerRefId;
  }

  get productDescription(): string | undefined {
    return this.inquiry?.product.description;
  }

  get productPrice(): number | undefined {
    return this.inquiry?.product.priceDto.value;
  }

  get productCurrency(): string | undefined {
    return this.inquiry?.product.priceDto.currency.currency;
  }

  get status(): string | undefined {
    return this.inquiry?.status;
  }
  get customerName(): string | undefined {
    return this.inquiry?.customer.name;
  }

  get customerSecondName(): string | undefined {
    return this.inquiry?.customer.surname;
  }

  get customerTelegramId(): string | undefined {
    return this.inquiry?.customer.telegramId;
  }

  get customerEmail(): string | undefined {
    return this.inquiry?.customer.email;
  }
}
