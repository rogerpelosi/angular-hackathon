import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FauxauthenticationService } from './fauxauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {

  constructor(
    private fauxAuth: FauxauthenticationService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let token = this.fauxAuth.getToken();
    
    return this.fauxAuth.authenticateToken(token);
  }
  
}
