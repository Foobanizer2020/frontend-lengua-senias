import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Pais } from '../_models/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  API_URI = 'http://localhost:8080/api/pais'

  constructor(private http:HttpClient) { }

  getPaises() {
    return this.http.get<Pais[]>(this.API_URI);
  }

  getPais(id:number){
    return this.http.get<Pais>(this.API_URI+'/'+id);
  }

  createPais(pais:Pais){
    return this.http.post(this.API_URI,pais);
  }

  updatePais(pais:Pais){
    return this.http.put(this.API_URI+'/'+pais.idPais, pais);
  }

  deletePais(id: number){
    return this.http.delete(this.API_URI+'/'+ id);
  }
}
