import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/user';


@Injectable({
  providedIn: 'root'
})
export class FauxauthenticationService {

  constructor(){}

  authenticateUser(user: User): string {
    if(user.username == 'admin' && user.password == 'password123'){
      return 'faux-token';
    } 
    return 'invalid-token';
  }

  authenticateToken(token: string | null): boolean{
    return token == 'faux-token';
  }

  setToken(token: string){
    localStorage.setItem('fauxBearerToken', token);
  }

  getToken(){
    return localStorage.getItem('fauxBearerToken')
  }
  
}
