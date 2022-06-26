import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  status: any;
  constructor(private _route: Router) {
    this.status = localStorage.getItem('email');
  }

  cartIcon = faCartPlus;
  logoutUser() {
    if (confirm('Are You Sure Want To Delete')) {
      // localStorage.clear();
      // this._route.navigateByUrl('login');
    }
  }

  checkUser() {
    if (localStorage.getItem('email')) {
      // this._route.navigateByUrl('home');
    } else {
      alert('Please Login');
    }
  }

  checkUser1() {
    if (localStorage.getItem('email')) {
      // this._route.navigateByUrl('admin');
    } else {
      alert('Please Login');
    }
  }

  checkUser2() {
    if (localStorage.getItem('email')) {
      // this._route.navigateByUrl('admin');
    } else {
      alert('Please Login');
    }
  }

  checkUser3() {
    if (localStorage.getItem('email')) {
      // this._route.navigateByUrl('connect');
    } else {
      alert('Please Login');
    }
  }

  checkUser4() {
    if (localStorage.getItem('email')) {
      // this._route.navigateByUrl('about');
    } else {
      alert('Please Login');
    }
  }

  checkUser5() {
    if (localStorage.getItem('email')) {
      // this._route.navigateByUrl('addToCart');
    } else {
      alert('Please Login');
    }
  }
  ngOnInit(): void {}
}
