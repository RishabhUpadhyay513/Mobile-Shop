import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {
  faDeleteLeft,
  faCreditCard,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit {
  delete = faTrash;
  creditCard = faCreditCard;
  cartData: any;
  emailId: any;

  public products: any = [];
  public grandTotal!: number;

  allCartData: any;
  constructor(
    private cartService: CartService,
    private buy: PaymentServiceService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: any) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  moreShop() {
    this._route.navigateByUrl('home');
  }

  options = {
    key: 'rzp_test_6C8pd0zZ98sI9i',
    amount: '50000',
    currency: 'INR',
    name: 'Mobile Hub',
    description: 'Test Transaction',
    image:
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    order_id: '',
    prefill: {
      name: 'Rishabh Upadhyay',
      email: 'abhayupadhyay513@gmail.com',
      contact: '6398943996',
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
      color: '#3399cc',
    },
  };

  pay(accountInfo: any) {
    this.options.amount = accountInfo.price;
    this.options.description = accountInfo.description;
    let a = document.getElementsByClassName('credit')[0];
    let raz1 = new this.buy.nativeWindow.Razorpay(this.options);
    // raz1.open();
  }
}
