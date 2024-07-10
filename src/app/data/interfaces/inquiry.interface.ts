import {Product} from "./product.interface";
import {Customer} from "./customer.interface";

export interface Inquiry {
  id: number;
  sourceId: SourceDto;
  comment: string;
  status: string;
  note: string;
  productRefId: number;
  customerRefId: number;
  managerRefId: number;
  product: Product;
  customer: Customer;
}

export interface SourceDto {
  id: number;
  name: string;
}


