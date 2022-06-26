import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QueryInter } from '../ProductInter/query-inter';
@Injectable({
  providedIn: 'root',
})
export class QueryServService {
  constructor(private http: HttpClient) {}

  private url: string = 'http://localhost:5555/queryData';

  sendQueryMsg(data: any): Observable<any> {
    return this.http.post<QueryInter>(this.url, data);
  }
}
