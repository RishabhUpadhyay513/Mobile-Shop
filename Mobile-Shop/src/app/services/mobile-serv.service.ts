import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemInter } from '../ProductInter/item-inter';
@Injectable({
  providedIn: 'root',
})
export class MobileServService {
  private url: string = 'http://localhost:1234/products';

  constructor(private http: HttpClient) {}

  getProduct(): Observable<any> {
    return this.http.get<ItemInter>(this.url);
  }
}
