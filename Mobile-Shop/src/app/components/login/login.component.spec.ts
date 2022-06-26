import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { LoginServService } from 'src/app/services/login-serv.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { LoginDataInter } from 'src/app/ProductInter/login-data-inter';

class mockLoginData {
  getLoginData() {
    let userCredData: LoginDataInter[] = [
      {
        firstName: 'Rishabh',
        lastName: 'Upadhyay',
        password: 12345,
        confirmPassword: 12345,
        email: 'abhayupadhyay513@gmail.com',
        address: 'firozabad',
        phoneNo: 6398943996,
        feedback: 'its a good phone',
      },
    ];
    return of(userCredData);
  }
}
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let testServ: LoginServService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [
        LoginComponent,
        { provide: LoginServService, useClass: mockLoginData },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    testServ = TestBed.get(LoginServService);
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('service created', () => {
    expect(LoginServService).toBeDefined();
  });

  it('should check login', () => {
    component.getFormValue();
    expect(component.getFormValue).not.toEqual('');
  });

  it('should be login user', () => {
    component.loginForm.setValue({
      firstName: 'Rishabh',
      lastName: 'Upadhyay',
      email: 'abhayupadhyay513@gmail.com',
      password: 'abhay9690',
    });
    spyOn(window, 'alert');
    component.getFormValue();
    expect(component.getFormValue);
  });
});
