import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServService } from 'src/app/services/login-serv.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userEnterData: any;
  getLogin: any;
  matchData: any;

  componentName = 'login Component';
  result: any;
  constructor(private loginAuth: LoginServService, private _route: Router) {}

  loginForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z A-Z]+$'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z A-Z]+$'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z @ A-Z @ . 0-9]+$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z A-Z @ 0-9]+$'),
    ]),
  });

  getFormValue() {
    this.userEnterData = this.loginForm.value;
    this.loginAuth.getLoginData().subscribe((res) => {
      const result = res.find((item: any) => {
        return (
          item.firstName == this.userEnterData.firstName &&
          item.lastName == this.userEnterData.lastName &&
          item.email == this.userEnterData.email &&
          item.password == this.userEnterData.password
        );
      });
      // if (result) {
      //   alert('SuccessFully login');
      //   this._route.navigateByUrl('home');
      //   localStorage.setItem('email', result.email);
      // } else {
      //   alert('User Not Found');
      // }
    });
  }

  get firstName() {
    return this.loginForm.get('firstName');
  }

  get lastName() {
    return this.loginForm.get('lastName');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  ngOnInit(): void {}
}
