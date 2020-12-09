import { Component, OnInit } from '@angular/core';
import { FavoritoData, PALABRA } from 'src/app/_models/favorito_data';
import { TokenStorageService } from 'src/app/_services/autenticacion/token-storage.service';
import { FavoritosService } from 'src/app/_services/favoritos.service';
import { PalabraService } from 'src/app/_services/palabra.service';

@Component({
  selector: 'app-general-palabras-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  palabras = [];
  favoritos = [];
  isLoggedIn:Boolean;

  constructor(
    private palabrasService: PalabraService,
    private favoritosService: FavoritosService,
    private tokenService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.isLoggedIn();
    if(this.tokenService.isLoggedIn()) {
      this.getFavoritos();
    }
    this.getPalabras();
  }

  getPalabras() {
    this.palabrasService.getPalabras().subscribe(
      res => {
        this.palabras = res;
      },
      err => console.log(err)
    );
  }

  getFavoritos() {
    this.favoritosService.getFavoritos().subscribe(
      res => {
        const palabras = res["palabras"];
        this.favoritos = palabras.map(palabra => palabra.idPalabra);
        console.log(this.favoritos);
      },
      err => console.log(err)
    );
  }

  eliminarFavorito(id) {
    const data:FavoritoData = new FavoritoData();
    data.idFavorito = id;
    data.tipo = PALABRA;
    this.favoritosService.deletFavorito(data).subscribe(
      res => this.getFavoritos(),
      err => {
        console.log(err);
        this.getFavoritos();
      }
    );
  }

  agregaFavorito(id) {
    const data:FavoritoData = new FavoritoData();
    data.idFavorito = id;
    data.tipo = PALABRA;
    this.favoritosService.addFavorito(data).subscribe(
      res => this.getFavoritos(),
      err => {
        console.log(err);
        this.getFavoritos();
      }
    );
  }

  accion(id) {
    if(this.favoritos.includes(id)) {
      this.eliminarFavorito(id);
    } else {
      this.agregaFavorito(id);
    }
  }

}
