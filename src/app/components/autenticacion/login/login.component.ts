import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/_services/autenticacion/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted:Boolean;

  constructor(
    private formBuilder:FormBuilder,
    private loginService:LoginService
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

    this.loginService.login(this.loginForm.value).subscribe(
      res => {
        // redirect to home
      },
      err => {console.log(err)}
    );
  }

  get f() {
    return this.loginForm.controls;
  }

}
