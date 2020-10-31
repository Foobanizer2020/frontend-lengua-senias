import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Idioma } from '../_models/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  constructor(private http: HttpClient) { }

  getIdiomas() {
    //return this.http.get<Idioma[]>(environment.api_uri + '/idioma');
    return this.http.get<Idioma[]>('/assets/idiomas.json');
  }
}
