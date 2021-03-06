import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from 'src/app/_services/autenticacion/registro.service';

declare var $:any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm:FormGroup;
  submitted:Boolean;
  idiomas:any[];
  paises:any[];
  estados:any[];

  constructor(
    private formBuilder:FormBuilder,
    private registroService:RegistroService
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
    this.getEstados();
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

    this.registroService.registrarUsuario(this.registroForm.value).subscribe(
      res => {
        // redirect to home
      },
      err => {console.log(err)}
    );
  }

  get f() {
    return this.registroForm.controls;
  }

  getIdiomas() {
    this.idiomas = [
      {id:1, nombre:"Español"},
      {id:2, nombre:"English"},
      {id:3, nombre:"Français"}
    ];
  }

  getPaises() {
    this.paises = [
      {
        id:1, 
        nombre:"México", 
        estados: [
          {id:1, nombre:"Español"},
          {id:2, nombre:"English"},
          {id:3, nombre:"Français"}
        ]
      },
      {
        id:1, 
        nombre:"Estados Unidos", 
        estados: [
          {id:1, nombre:"Español"},
          {id:2, nombre:"English"},
          {id:3, nombre:"Français"}
        ]
      },
      {
        id:1, 
        nombre:"Francia", 
        estados: [
          {id:1, nombre:"Español"},
          {id:2, nombre:"English"},
          {id:3, nombre:"Français"}
        ]
      }
    ];
  }

  getEstados() {
    this.estados = [
      {id:1, nombre:"estado1"},
      {id:2, nombre:"estado2"},
      {id:3, nombre:"estado3"}
    ];
  }
}
