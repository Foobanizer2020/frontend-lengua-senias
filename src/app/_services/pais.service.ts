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
    //return this.http.get(environment.api_uri + '/pais');
    return this.http.get<Pais[]>(this.API_URI+'/pais');
  }

  getPais(id:number){
    return this.http.get<Pais>(this.API_URI+'/pais'+id);
  }

  createPais(pais:Pais){
    return this.http.post(this.API_URI+'/pais',pais);
  }

  updatePais(pais:Pais){
    return this.http.put(this.API_URI+'/pais/'+pais.id,pais);
  }

  deletePais(id: number){
    return this.http.delete(this.API_URI+'/pais/'+ id);
  }

  getEstados(id_pais) {
    //return this.http.get<Estado[]>(environment.api_uri+'/pais/'+id_pais+'/estados');
    return this.http.get<Estado[]>('/assets/estados'+id_pais+'.json');
  }
}
