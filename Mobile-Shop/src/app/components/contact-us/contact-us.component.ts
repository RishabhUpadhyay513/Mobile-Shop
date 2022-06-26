import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QueryInter } from 'src/app/ProductInter/query-inter';
import { QueryServService } from 'src/app/services/query-serv.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  constructor(private serv: QueryServService) {}
  queryData:any;
  msg: QueryInter[] = [];

  ngOnInit(): void {}

  contactUs = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z A-Z]+$'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z @ A-Z @. 0-9]+$'),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+$'),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z @ A-Z @. 0-9]+$'),
    ]),
  });

  getQuery() {
      this.msg = this.contactUs.value;
      this.serv.sendQueryMsg(this.msg).subscribe((result) => {
      this.queryData = result;
      });
  }

  get name() {
    return this.contactUs.get('name');
  }

  get email() {
    return this.contactUs.get('email');
  }

  get phone() {
    return this.contactUs.get('phone');
  }

  get message() {
    return this.contactUs.get('message');
  }
}
