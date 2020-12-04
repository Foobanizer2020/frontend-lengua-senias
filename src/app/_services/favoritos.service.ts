import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FavoritoData } from '../_models/favorito_data';
import { TokenStorageService } from './autenticacion/token-storage.service';

const api_uri = environment.api_uri + '/api/favoritos'

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  constructor(
    private http:HttpClient,
    private tokenService:TokenStorageService
  ) { }

  getFavoritos() {
    let data:FavoritoData = new FavoritoData();
    data.idUsuario = this.tokenService.getLoggedUserId();
    return this.http.get(api_uri + '/' + data.idUsuario);
  }

  addFavorito(data:FavoritoData) {
    data.idUsuario = this.tokenService.getLoggedUserId();
    return this.http.post(api_uri, data);
  }

  deletFavorito(data:FavoritoData) {
    data.idUsuario = this.tokenService.getLoggedUserId();
    console.log(data);
    return this.http.post(api_uri + '/' + data.idUsuario, data);
  }
}
