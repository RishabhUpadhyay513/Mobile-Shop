// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientModule } from '@angular/common/http';
// import { HomeComponent } from './home.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { of } from 'rxjs';
// import { MobileServService } from 'src/app/services/mobile-serv.service';
// import { CartService } from 'src/app/services/cart.service';
// class mochHomeData {
//   getProduct() {
//     var dat = [
//       {
//         "id": 1,
//         "title": "iPhone 9",
//         "description": "An apple mobile which is nothing like apple",
//         "price": 549,
//         "discountPercentage": 12.96,
//         "rating": 4.69,
//         "stock": 94,
//         "brand": "Apple",
//         "category": "smartphones",
//         "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//       }
//     ];
//     return of(dat);
//   }
// }

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],

// declarations: [HomeComponent],
//       providers: [{ provide: MobileServService, useClass: mochHomeData }]
//     })
//       .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('should check addToCart()',()=>{
//     component.addtocart(1);
//     expect(component.addtocart).not.toEqual("");
//     expect(component).toBeTruthy();
//   });
//   it('should be ngOnit', () => {
//     component.ngOnInit();
//     expect(component.ngOnInit).not.toEqual("")
//   });
//   it('should be ngOnit', () => {
//      component.addtocart(1);
//     expect(component.cartSer.addtoCart(1)).toEqual()
//   });
// });

// // it('call addtocart when cart data called', () => {
// //   const cart = [{
// //     title: 'Apple',
// //     description: 'Apple Phone Is very Good',
// //     price: 80000,
// //     discountPercentage: 12,
// //     rating: 4,
// //     stock: 50,
// //     brand: 'Iphone',
// //     category: 'Air buds',
// //     thumbnail: 'image',
// //   }];
// //   const res = { Success: true, Data: cart }
// //   spyOn(component.httpData, 'getProduct').and.returnValue(of(res));
// //   spyOn(component.cartSer, 'addtoCart').and.callThrough();
// //   component.httpData.getProduct();
// //   component.addtocart('title');
// //   expect(component.httpData.getProduct).toBeDefined()
// //   expect(component.cartSer.addtoCart).not.toHaveBeenCalled()
// // });

// // it('call cart service data when data is loaded', () => {
// //   const res = { Message: 'error_msg' }
// //   spyOn(component.cartSer, 'addtoCart').and.callThrough();
// //   component.httpData.getProduct();
// //   component.addtocart('description');
// //   expect(component.httpData.getProduct).not.toBeDefined()
// //   expect(component.cartSer.addtoCart).toHaveBeenCalledWith('error_msg')
// // });
