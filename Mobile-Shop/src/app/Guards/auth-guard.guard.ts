import { Injectable } from '@angular/core';
import {  CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  status: boolean = false;
  canActivate() {
    if (localStorage.getItem('email')) {
      this.status = true;
    } else {
      this.status = false;
    }
    return this.status;
  }
  
}
