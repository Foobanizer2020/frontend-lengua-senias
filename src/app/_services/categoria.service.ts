import { Injectable } from '@angular/core';
import { Categoria } from '../_models/categoria';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  API_URI = 'http://localhost:8080/api/categoria'

  constructor(private http:HttpClient) { }


  getCategorias() {
    return this.http.get<Categoria[]>(this.API_URI);
  }

  getCategoria(id:number){
    return this.http.get<Categoria>(this.API_URI+'/'+id);
  }

  createCategoria(categoria: Categoria){
    return this.http.post(this.API_URI+'/',categoria);
  }

  updateCategoria(categoria: Categoria){
    return this.http.put(this.API_URI+'/'+categoria.idCategoria, categoria);
  }

  deleteCategoria(id: number){
    return this.http.delete(this.API_URI+'/'+ id);
  
  }
}
