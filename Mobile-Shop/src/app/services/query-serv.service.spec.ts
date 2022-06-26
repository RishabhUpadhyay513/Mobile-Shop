import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QueryServService } from './query-serv.service';

describe('QueryServService', () => {
  let service: QueryServService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    
    service = TestBed.inject(QueryServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should check Query msg',()=>{
    service.sendQueryMsg(1);
    expect(service.sendQueryMsg).not.toEqual("");
  })
});
