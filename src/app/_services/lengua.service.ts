import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lengua } from '../_models/lengua';

@Injectable({
  providedIn: 'root'
})
export class LenguaService {

  constructor(private http: HttpClient) { }

  getLenguas() {
    return this.http.get<Lengua[]>("/dummy");
  }
}
