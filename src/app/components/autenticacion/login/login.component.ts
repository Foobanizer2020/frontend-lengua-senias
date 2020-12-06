import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/autenticacion/auth.service';
import { TokenStorageService } from 'src/app/_services/autenticacion/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted:Boolean = false;
  loginFailed:Boolean = false;
  errorMessage:String;

  constructor(
    private formBuilder:FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember_me: ['']
    });
  }

  login() {
    this.submitted = true;
    if(this.loginForm.invalid) {
      console.log('Formulario inválido.')
      return
    }

    this.authService.login(this.loginForm.value).subscribe(
      res => {
        this.tokenStorage.saveToken(res.token);
        this.tokenStorage.saveUser(res);
        window.location.href = '/home';
      },
      err => {
        this.loginFailed = true;
        this.errorMessage = err.message;
      }
    );
  }

  get f() {
    return this.loginForm.controls;
  }

}
