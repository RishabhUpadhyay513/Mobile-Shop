import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should check getProduct',()=>{
    service.getProducts();
    expect(service.getProducts).not.toEqual("");
  });
  it('should check setProduct',()=>{
    service.setProduct(1);
    expect(service.setProduct).toBeTruthy();
  });
  it('should check addtoCart',()=>{
    service.addtoCart(1);
    expect(service.addtoCart).not.toEqual("");
  })
});
