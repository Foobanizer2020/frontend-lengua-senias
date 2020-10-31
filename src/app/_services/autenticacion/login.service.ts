import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from 'src/app/_models/LoginData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  login(data:LoginData) {
    return this.http.post(this.API_URI+"/api/login", data);
  }
}
