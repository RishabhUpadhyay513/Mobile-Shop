import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './contact-us.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { QueryServService } from 'src/app/services/query-serv.service';
class mockQueryData {
  sendQueryMsg() {
    var dat = [
      {
        "name": "Rishabh Upadhyay",
        "email": "abhayupadhyay513@gmail.com",
        "phone": "06398943996",
        "message": "This Website is amazing for mobiles and laptop. Great Website",
        "id": 2
      },
    ];
    return of(dat);
  }
}

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpClientModule],
declarations: [ ContactUsComponent ],
providers: [{ provide: QueryServService, useClass: mockQueryData }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check get Query',()=>{
    component.getQuery();
    expect(component).toBeTruthy();
  });
  it('should be getadmin', () => {
    component.getQuery();
    expect(component.queryData).not.toEqual("")
  });
});
