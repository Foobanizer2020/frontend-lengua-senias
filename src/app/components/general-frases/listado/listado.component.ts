import { Component, OnInit } from '@angular/core';
import { FavoritoData, FRASE } from 'src/app/_models/favorito_data';
import { Frase } from 'src/app/_models/frase';
import { TokenStorageService } from 'src/app/_services/autenticacion/token-storage.service';
import { FavoritosService } from 'src/app/_services/favoritos.service';
import { FraseService } from 'src/app/_services/frase.service';

@Component({
  selector: 'app-general-frases-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  frases = [];
  favoritos = [];
  isLoggedIn:Boolean;

  constructor(
    private frasesService: FraseService,
    private favoritosService: FavoritosService,
    private tokenService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.isLoggedIn();
    if(this.tokenService.isLoggedIn()) {
      this.getFavoritos();
    }
    this.getFrases();
  }

  getFrases() {
    this.frasesService.getFrases().subscribe(
      res => {
        this.frases = res;
      },
      err => console.log(err)
    );
  }

  getFavoritos() {
    this.favoritosService.getFavoritos().subscribe(
      res => {
        const frases = res["frases"];
        this.favoritos = frases.map(frase => frase.idFrase);
        console.log(this.favoritos);
      },
      err => console.log(err)
    );
  }

  eliminarFavorito(id) {
    const data:FavoritoData = new FavoritoData();
    data.idFavorito = id;
    data.tipo = FRASE;
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
    data.tipo = FRASE;
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
