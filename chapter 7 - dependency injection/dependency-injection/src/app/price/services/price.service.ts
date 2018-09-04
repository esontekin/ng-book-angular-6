import { Injectable } from '@angular/core';
import { IPriceService } from '../interfaces/price-service.interface';

@Injectable({
  providedIn: 'root'
})
export class PriceService implements IPriceService {

  constructor() {}

  calculateTotalPrice(basePrice: number, state: string) {
    const tax = Math.random();

    return basePrice + tax;
  }
}
