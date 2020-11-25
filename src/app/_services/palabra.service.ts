import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Palabra } from '../_models/palabra';

const api_uri = environment.api_uri + '/api/palabra';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {

  constructor(private http:HttpClient) { }

  getPalabras() {
    return this.http.get<Palabra[]>(api_uri);
  }

  getPalabra(id:number) {
    return this.http.get<Palabra>(api_uri + '/'+ id);
  }

  createPalabra(palabra:Palabra) {
    return this.http.post(api_uri, palabra);
  }

  updatePalabra(palabra:Palabra) {
    return this.http.put(api_uri + '/' + palabra.idPalabra, palabra);
  }

  deletePalabra(id:number) {
    return this.http.delete(api_uri + '/' + id);
  }
}
