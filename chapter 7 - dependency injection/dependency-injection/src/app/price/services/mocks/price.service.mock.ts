import { PriceService } from '../price.service';

export class MockPriceService implements PriceService {
  public calculateTotalPrice(basePrice: number, state: string): number {
    if (state === 'FL') {
      return basePrice + 0.66;
    }

    return basePrice;
  }
}
