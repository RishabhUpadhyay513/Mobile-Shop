import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MobileServService } from './mobile-serv.service';

describe('MobileServService', () => {
  let service: MobileServService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(MobileServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should check mobile service',()=>{
    service.getProduct();
    expect(service.getProduct).not.toEqual("");
  })
});
