import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Senia } from '../_models/senia';


@Injectable({
  providedIn: 'root'
})
export class SeniaService {

 API_URI = 'http://localhost:8080/api/senia';

  constructor(private http:HttpClient) { }

  getSenias() {
    return this.http.get<Senia[]>(this.API_URI);
  }

  getSenia(id:number) {
    return this.http.get<Senia>(this.API_URI + '/'+ id);
  }

  createSenia(senia:Senia) {
    return this.http.post(this.API_URI, senia);
  }

  updateSenia(senia:Senia) {
    return this.http.put(this.API_URI + '/' + senia.idSenia, senia);
  }

  deleteSenia(id:number) {
    return this.http.delete(this.API_URI + '/' + id);
  }
}
