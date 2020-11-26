import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/autenticacion/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent implements OnInit {

  form:FormGroup;
  submitted:boolean;

  constructor(
    private fb:FormBuilder,
    private srvAutenticacion:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  recuperarPassword() {
    this.submitted = true;
    if(this.form.invalid) {
      console.log("Formulario inválido");
      return;
    }

    Swal.fire({
      title: 'Restaurando contraseña',
      showConfirmButton: false,
      allowOutsideClick: false,
      willOpen: () => Swal.showLoading()
    });

    this.srvAutenticacion.recuperacion(this.form.value).subscribe(
      res => {
        Swal.close();
        Swal.fire({
          icon: "success",
          title: 'Contraseña restaurada<br>Se te mandó un correo electrónico con la nueva contraseña',
          showConfirmButton: false,
          allowOutsideClick: false,
          timer: 3000,
          width: "auto",
          willOpen: () => Swal.showLoading()
        }).then(() => this.router.navigateByUrl('login'));
      },
      err => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Error al reestablecer la contraseña<br>¿Ese es tu correo electrónico?',
          showConfirmButton: true,
          width: "auto"
        })
      }
    );
  }

  get f() {
    return this.form.controls;
  }
}
