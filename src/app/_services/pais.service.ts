import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
