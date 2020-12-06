import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../autenticacion/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {

  constructor(
    private router:Router,
    private tokenService: TokenStorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.valid()) return true;
    this.router.navigate(['/']);
    return false;
  }

  private valid() {
    return this.tokenService.isLoggedIn() && this.tokenService.isAdmin();
  }
}
