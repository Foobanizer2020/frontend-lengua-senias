import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../autenticacion/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedService implements CanActivate {

  constructor(
    private tokenService:TokenStorageService,
    private router:Router
  ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.tokenService.isLoggedIn()) return true;
    console.log("Debes estar logueado.")
    this.router.navigate(['login']);
    return false;
  }
}
