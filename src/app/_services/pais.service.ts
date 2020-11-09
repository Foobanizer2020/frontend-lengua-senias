import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estado } from '../_models/estado';
import { Pais } from '../_models/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  API_URI = 'http://localhost:8080'

  constructor(private http:HttpClient) { }

  getPaises() {
    return this.http.get<Pais[]>(this.API_URI+'/pais/paises');
  }

  getPais(id:number){
    return this.http.get<Pais>(this.API_URI+'/pais'+id);
  }

  createPais(pais:Pais){
    return this.http.post(this.API_URI+'/pais',pais);
  }

  updatePais(pais:Pais){
    return this.http.put(this.API_URI+'/pais/'+pais.idPais,pais);
  }

  deletePais(id: number){
    return this.http.delete(this.API_URI+'/pais/'+ id);
  }
}
