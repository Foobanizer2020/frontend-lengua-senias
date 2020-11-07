import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Estado } from '../_models/estado';

const api_uri = environment.api_uri + '/api/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }

  getEstados(paisId:number) {
    return this.http.get<Estado[]>(api_uri+ '/pais/'+ paisId);
  }

  getEstado(id) {
    return this.http.get<Estado>(api_uri + '/' + id);
  }

  createEstado(estado:Estado) {
    return this.http.post(api_uri, estado);
  }

  updateEstado(id, estado:Estado) {
    return this.http.put(api_uri + '/' + id, estado);
  }

  deleteEstado(id) {
    return this.http.delete(api_uri + '/' + id);
  }
}
