import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/autenticacion/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  doNotShow:Boolean;
  loggedIn:Boolean;
  isAdmin:Boolean;

  constructor(
    private tokenService:TokenStorageService
  ) { }

  ngOnInit(): void {
    const excludedRoutes = ['/login', '/registro', '/recuperacion'];
    if (excludedRoutes.includes(window.location.pathname)) {
      this.doNotShow = true;
    }
    this.loggedIn = this.tokenService.isLoggedIn();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cerrarSesion() {
    this.tokenService.signOut();
    window.location.reload();
  }
}
