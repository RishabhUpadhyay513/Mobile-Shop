import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginDataInter } from 'src/app/ProductInter/login-data-inter';
import { LoginServService } from 'src/app/services/login-serv.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  data: any;
  imageSrc: string = '';
  postData: LoginDataInter[] = [];
  url:string = 'http://localhost:1234/loginData'
  constructor(private login:LoginServService) { }

  ngOnInit(): void {
  }

  signup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z A-Z]+$'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z A-Z]+$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z @ A-Z @ . 0-9]+$'),
    ]),
    contactNo: new FormControl('',[
      Validators.required,
      Validators.pattern('[0-9]+$'),
    ]),
    feedback: new FormControl('',[
      Validators.required,
      Validators.pattern('[a-z @ A-Z @ . 0-9]+$'),
    ])
  });


  sendSignUpData() {
    this.data = this.signup.value;
    this.login.sendLoginInformation(this.data).subscribe((res: LoginDataInter[]) => {
      this.postData = res;
      this.signup.reset();
    });
    alert("Your Resonse Has been Recorded")
  }


  get firstName() {
    return this.signup.get('firstName');
  }

  get lastName() {
    return this.signup.get('lastName');
  }

  get password() {
    return this.signup.get('password');
  }

  get confirmPassword() {
    return this.signup.get('confirmPassword');
  }

  get email() {
    return this.signup.get('email');
  }

  get contactNo() {
    return this.signup.get('contactNo');
  }

  get feedback(){
    return this.signup.get('feedback')
  }
}
