import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDataInter } from '../ProductInter/login-data-inter';
@Injectable({
  providedIn: 'root',
})
export class LoginServService {
  baseurl: string = 'http://localhost:3000/loginData';
  constructor(private http: HttpClient) {}

  getLoginData(): Observable<any> {
    return this.http.get<LoginDataInter>(this.baseurl);
  }

  sendLoginInformation(data: any): Observable<any> {
    return this.http.post<LoginDataInter>(this.baseurl, data);
  }
}
