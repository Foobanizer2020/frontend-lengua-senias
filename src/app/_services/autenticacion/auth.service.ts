import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from 'src/app/_models/credentials';
import { Usuario } from 'src/app/_models/usuario';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials:Credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', credentials, httpOptions);
  }

  registro(usuario:Usuario): Observable<any> {
    return this.http.post(AUTH_API + 'registro', usuario, httpOptions);
  }

  fake(data): Observable<any>{
    return this.http.get('/assets/fake.json');
  }
}
