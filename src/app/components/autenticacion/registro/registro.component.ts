import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Estado } from 'src/app/_models/estado';
import { Idioma } from 'src/app/_models/idioma';
import { Pais } from 'src/app/_models/pais';
import { AuthService } from 'src/app/_services/autenticacion/auth.service';
import { TokenStorageService } from 'src/app/_services/autenticacion/token-storage.service';
import { EstadoService } from 'src/app/_services/estado.service';
import { IdiomaService } from 'src/app/_services/idioma.service';
import { PaisService } from 'src/app/_services/pais.service';

declare var $:any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm:FormGroup;
  submitted:boolean = false;
  
  idiomas:Idioma[];
  paises:Pais[];
  estados:Estado[];

  registerFailed:boolean = false;
  errorMessage:string;

  constructor(
    private formBuilder:FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private paisService: PaisService,
    private idiomaService: IdiomaService,
    private estadoService: EstadoService
  ) { }

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      pais: ['', Validators.required],
      estado: ['', Validators.required],
      idioma: ['', Validators.required]
    }, {
      validators: this.mustMatch('password', 'confirm_password')
    });
    this.submitted = false;
    this.getIdiomas();
    this.getPaises();
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  registrarUsuario() {
    this.submitted = true;
    if(this.registroForm.invalid) {
      console.log('Formulario inválido.')
      return
    }

    this.authService.registro(this.registroForm.value).subscribe(
      res => {
        this.authService.login(this.registroForm.value).subscribe(
          res => {
            this.tokenStorage.saveToken(res.token);
            this.tokenStorage.saveUser(res);
            this.router.navigateByUrl('home');
          },
          err => {
            this.registerFailed = true;
            this.errorMessage = err.message;
          }
        );
      },
      err => {
        this.registerFailed = true;
        this.errorMessage = err.message;
        console.log(err);
      }
    );
  }

  get f() {
    return this.registroForm.controls;
  }

  getIdiomas() {
    this.idiomaService.getAll().subscribe(
      res => {
        this.idiomas = res;
      }
    );
  }

  getPaises() {
    this.paisService.getPaises().subscribe(
      res => {
        this.paises = res;
      }
    );
  }

  updateEstados(paisId) {
    this.estadoService.getEstados(paisId).subscribe(
      res => {
        this.estados = res;
        this.registroForm.controls.estado.enable();
      }
    );
  }
}
