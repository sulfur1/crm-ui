import {Component, inject} from '@angular/core';
import {InquiryCardComponent} from "../../cards/inquiry-card/inquiry-card.component";
import {InquiryService} from "../../data/services/inquiry.service";
import {Inquiry} from "../../data/interfaces/inquiry.interface";

@Component({
  selector: 'app-inquiry-page',
  standalone: true,
  imports: [
    InquiryCardComponent
  ],
  templateUrl: './inquiry-page.component.html',
  styleUrl: './inquiry-page.component.scss'
})
export class InquiryPageComponent {
  inquiryService = inject(InquiryService);

  inquiries: Inquiry[] = [];

  constructor() {
    this.inquiryService.getInquiries()
      .subscribe(val => {
        this.inquiries = val
      })
  }

}
