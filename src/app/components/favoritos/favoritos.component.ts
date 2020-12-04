import { Component, OnInit } from '@angular/core';
import { FavoritoData, FRASE, PALABRA } from 'src/app/_models/favorito_data';
import { FavoritosService } from 'src/app/_services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  favoritos:any = {
    frases: [],
    palabras: []
  };

  constructor(
    private favoritosService:FavoritosService
  ) { }

  ngOnInit(): void {
    this.getFavoritos();
  }

  getFavoritos() {
    this.favoritosService.getFavoritos().subscribe(
      res => {
        this.favoritos = res;
        console.log(this.favoritos);
      },
      err => console.log(err)
    );
  }

  eliminarFavorito(id, tipo) {
    const data:FavoritoData = new FavoritoData();
    data.idFavorito = id;
    data.tipo = tipo == FRASE ? FRASE : PALABRA;
    this.favoritosService.deletFavorito(data).subscribe(
      res => this.getFavoritos(),
      err => {
        console.log(err);
        this.getFavoritos();
      }
    );
  }

}
