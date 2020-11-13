import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Fcategoria} from '../_models/fcategoria';

@Injectable({
  providedIn: 'root'
})
export class FcategoriaService {

  API_URI = 'http://localhost:8080'

  constructor(private http:HttpClient) { }

  getFcategorias() {
    return this.http.get<Fcategoria[]>(this.API_URI+'/fcategoria');
  }

  getFcategoria(id:number){
    return this.http.get<Fcategoria>(this.API_URI+'/fcategoria'+id);
  }

  createFcategoria(fcategoria: Fcategoria){
    return this.http.post(this.API_URI+'/fcategoria',fcategoria);
  }

  updateFcategoria(fcategoria: Fcategoria){
    return this.http.put(this.API_URI+'/fcategoria/'+fcategoria.idFcategoria, fcategoria);
  }

  deleteFcategoria(id: number){
    return this.http.delete(this.API_URI+'/fcategoria/'+ id);
  
  }
}