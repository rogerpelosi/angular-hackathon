import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrganicrouteService {

  constructor(
    private router: Router){}

  gotoLogin(){
    this.router.navigate(['login']);
  }

  gotoHome(){
    this.router.navigate(['home']);
  }

  gotoDashboard(){
    this.router.navigate(['dashboard']);
  }

}
