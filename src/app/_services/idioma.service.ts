import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Idioma } from '../_models/idioma';

const api_uri = environment.api_uri + '/api/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Idioma[]>(api_uri);
  }

  getById(id:number) {
    return this.http.get<Idioma>(api_uri + '/' + id);
  }

  create(idioma:Idioma) {
    return this.http.post(api_uri, idioma);
  }

  update(idioma:Idioma) {
    return this.http.put(api_uri + '/' + idioma.idIdioma, idioma);
  }

  delete(id:number) {
    return this.http.delete(api_uri + '/' + id);
  }
}
