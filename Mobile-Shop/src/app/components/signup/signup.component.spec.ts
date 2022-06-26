import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { LoginServService } from './../../services/login-serv.service';
class mockloginData {
  sendLoginInformation() {
    var dat = [
      {
        "firstName": "Manish",
        "lastName": "Bhardwaj",
        "password": "12345",
        "motherName": "RaniDevi",
        "fatherName": "SanjeevSharma",
        "address": "Chidraiprathvisingh",
        "maleGenderOption": "",
        "femaleGenderOption": "option2",
        "otherGenderOption": "",
        "dateofbirth": "10/01/1995",
        "pincode": "205152",
        "email": "manishbhardwajgmailcom",
        "position": "Junior Software Developer",
        "id": 1
      },
    ];
    return of(dat);
  }
}


describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],

      declarations: [SignupComponent],
      providers: [{ provide: LoginServService, useClass: mockloginData }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should check signUp', () => {
  //   component.sendSignUpData();
  //   expect(component.postData).toBeTruthy();
  // });
  it('should be getadmin', () => {
    component.sendSignUpData();
    expect(component.postData).toBeTruthy();
  });
});
