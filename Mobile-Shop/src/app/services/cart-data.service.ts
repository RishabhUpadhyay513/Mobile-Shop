import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  public url: string = 'http://localhost:9999/loginData';
  constructor(private http: HttpClient) {}

  getCartData() {
    return this.http.get(this.url);
  }

  sendCartData(data: any) {
    return this.http.post(this.url, data);
  }
}
