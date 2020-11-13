import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fcategoria } from '../_models/fcategoria';

@Injectable({
  providedIn: 'root'
})
export class FcategoriaService {

  constructor(private http:HttpClient) { }

  getFcategorias() {
    return this.http.get<Fcategoria[]>("/dummy");
  }
}
