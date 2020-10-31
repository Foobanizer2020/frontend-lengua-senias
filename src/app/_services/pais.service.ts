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

  constructor(private http:HttpClient) { }

  getPaises() {
    //return this.http.get(environment.api_uri + '/pais');
    return this.http.get<Pais[]>('/assets/paises.json');
  }

  getEstados(id_pais) {
    //return this.http.get<Estado[]>(environment.api_uri+'/pais/'+id_pais+'/estados');
    return this.http.get<Estado[]>('/assets/estados'+id_pais+'.json');
  }
}
