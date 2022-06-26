import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartDataService } from './cart-data.service';

describe('CartDataService', () => {
  let service: CartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    })
;
    service = TestBed.inject(CartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should check get Data',()=>{
    service.getCartData();
    expect(service.getCartData).not.toEqual("");
  });
  it('should check get Data',()=>{
    service.sendCartData(1);
    expect(service.sendCartData).not.toEqual("");
  })
});
