import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/_models/usuario';
import { TokenStorageService } from 'src/app/_services/autenticacion/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn:boolean = false;
  usuario: Usuario;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if(this.isLoggedIn) {
      this.usuario = this.tokenStorage.getUser();
    }
  }

  signOut() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
