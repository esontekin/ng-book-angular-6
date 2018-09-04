import { MockPriceService } from '../services/mocks/price.service.mock';
import { Product } from './price.model';

describe('Product', () => {
  let product;

  beforeEach(() => {
    const service = new MockPriceService();
    product = new Product(service, 11);
  });

  it('price', () => {
    expect(product.totalPrice('FL')).toBe(11.66);
  });
});
