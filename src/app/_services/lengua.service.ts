import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Lengua } from '../_models/lengua';

const api_uri = environment.api_uri + '/api/lengua';

@Injectable({
  providedIn: 'root'
})
export class LenguaService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Lengua[]>(api_uri);
  }

  getById(id:number) {
    return this.http.get<Lengua>(api_uri + '/' + id);
  }

  create(lengua:Lengua) {
    return this.http.post(api_uri, lengua);
  }

  update(lengua:Lengua) {
    return this.http.put(api_uri + '/' + lengua.idLengua, lengua);
  }

  delete(id:number) {
    return this.http.delete(api_uri + '/' + id);
  }
}
