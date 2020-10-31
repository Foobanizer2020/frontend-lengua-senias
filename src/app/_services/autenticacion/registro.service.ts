import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/_models/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  API_URI = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  registrarUsuario(usuario:Usuario) {
    return this.http.post(this.API_URI+'/api/registrar', usuario);
  }
}
