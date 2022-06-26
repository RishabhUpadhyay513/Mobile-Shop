import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemInter } from 'src/app/ProductInter/item-inter';
import { CartService } from 'src/app/services/cart.service';
import { MobileServService } from 'src/app/services/mobile-serv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  filterCategory: ItemInter[] = [];
  data: object = [];
  constructor(
    public httpData: MobileServService,
    public cartSer: CartService,
    public _route: Router
  ) {}

  ngOnInit(): void {
    this.httpData.getProduct().subscribe((result) => {
      this.filterCategory = result;
    });
  }
  addtocart(data: any) {
    if (localStorage.getItem('email')) {
      // this.cartSer.addtoCart(data);
      // let cartData = {
      //   image: data.thumbnail,
      //   brand: data.brand,
      //   price: data.price,
      //   desc: data.description,
      //   rating: data.rating,
      //   discount: data.discountPercentage,
      // };
      // localStorage.setItem("Cart Data",JSON.stringify(cartData))
    } else {
      alert('Please Login First');
      this._route.navigateByUrl('/login');
    }
  }
}
