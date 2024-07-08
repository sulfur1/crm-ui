export interface Currency {
  currency: string;
}

export interface PriceDto {
  id: number;
  value: number;
  currency: Currency;
}

export interface DurationDto {
  id: number;
  inDays: number;
}

export interface DiscountDto {
  id: number;
  value: number;
  dateTimeFrom: string;
  dateTimeUntil: string;
  active: boolean;
}

export interface Product {
  id: number;
  summary: string;
  description: string;
  priceDto: PriceDto;
  durationDto: DurationDto;
  active: boolean;
  discountDtos: DiscountDto[];
}
