import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  jwtHelper:JwtHelperService;

  constructor() {
    this.jwtHelper = new JwtHelperService();
   }

  signOut(): void {
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }

  public getLoggedUserId() {
    const token = this.jwtHelper.decodeToken(this.getToken());
    return token.userId;
  }

  public isLoggedIn() {
    const token = this.getToken();
    return token && this.jwtHelper.isTokenExpired(token); 
  }
}
