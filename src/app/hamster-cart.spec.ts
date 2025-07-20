import { TestBed } from '@angular/core/testing';

import { HamsterCart } from './hamster-cart';

describe('HamsterCart', () => {
  let service: HamsterCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HamsterCart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
