import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from 'src/app/_models/credentials';
import { Usuario } from 'src/app/_models/usuario';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const api_uri = environment.api_uri + '/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials:Credentials): Observable<any> {
    return this.http.post(api_uri + 'login', credentials, httpOptions);
  }

  registro(usuario:Usuario): Observable<any> {
    return this.http.post(api_uri + 'registro', usuario, httpOptions);
  }

  fake(data): Observable<any>{
    return this.http.get('/assets/fake.json');
  }
}
