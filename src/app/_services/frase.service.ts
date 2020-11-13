import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Frase } from '../_models/frase';

const api_uri = environment.api_uri + '/api/estado';

@Injectable({
  providedIn: 'root'
})
export class FraseService {

  constructor(private http:HttpClient) { }

  getFrases() {
    return this.http.get<Frase[]>(api_uri);
  }

  getFrase(id:number) {
    return this.http.get<Frase>(api_uri + '/'+ id);
  }

  createFrase(frase:Frase) {
    return this.http.post(api_uri, frase);
  }

  updateFrase(frase:Frase) {
    return this.http.put(api_uri + '/' + frase.idFrase, frase);
  }

  deleteFrase(id:number) {
    return this.http.delete(api_uri + '/' + id);
  }
}
