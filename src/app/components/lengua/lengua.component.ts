import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lengua } from 'src/app/_models/lengua';
import { Pais } from 'src/app/_models/pais';
import { LenguaService } from 'src/app/_services/lengua.service';
import { PaisService } from 'src/app/_services/pais.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

declare var $:any;

@Component({
  selector: 'app-lengua',
  templateUrl: './lengua.component.html',
  styleUrls: ['./lengua.component.css']
})
export class LenguaComponent implements OnInit {

  form:FormGroup;
  lenguas:Lengua[];
  lengua:Lengua;
  submitted:boolean = false;
  formStatus:string = 'CREATE';
  paises:Pais[];

  constructor(
    private lenguaService:LenguaService,
    private paisService:PaisService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      "idLengua": [''],
      "nombre": ['', Validators.required],
      "abreviatura": ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      "paises": [[]]
    });

    this.getLenguas();
    this.getPaises();
  }

  getPaises() {
    this.paisService.getPaises().subscribe(
      res => this.paises = res,
      err => console.log(err)
    );
  }

  getLenguas() {
    this.lenguaService.getAll().subscribe(
      res => {
        this.lenguas = res;
      },
      err => console.log(err)
    );
  }

  openRegistroModal() {
    this.form.reset();
    this.submitted = false;
    this.formStatus = "CREATE";
    $("#formularioModal").modal("show");
  }

  openEdicionModal(lengua) {
    this.form.setValue(lengua);
    this.submitted = false;
    this.formStatus = "UPDATE";
    $("#formularioModal").modal("show");
  }

  createLengua() {
    this.submitted = true;
    if(this.form.invalid) {
      console.log("Formulario inválido");
      return;
    }

    this.form.patchValue({
      abreviatura: this.form.value["abreviatura"].toUpperCase()
    });

    this.lenguaService.create(this.form.value).subscribe(
      res => {
        $("#formularioModal").modal("hide");
        this.getLenguas();
        Swal.fire({
          icon: 'success',
          title: 'Lengua agregado exitosamente',
          showConfirmButton: false,
          timer: environment.messageTime
        });
      },
      err => console.log(err)
    );
  }

  updateLengua() {
    this.submitted = true;

    if(this.form.invalid){
      console.log('Formulario inválido');
      return;
    }

    this.form.patchValue({
      abreviatura: this.form.value["abreviatura"].toUpperCase()
    });

    this.lenguaService.update(this.form.value).subscribe(
      res => {
        this.getLenguas();
        $("#formularioModal").modal("hide");
        Swal.fire({
          icon: 'success',
          title: 'Lengua actualizado exitosamente',
          showConfirmButton: false,
          timer: environment.messageTime
        });
      },
      err => console.error(err)
    );
  }

  deleteLengua(id:number) {
    this.lenguaService.delete(id).subscribe(
      res => {
        this.getLenguas();
        Swal.fire({
          icon: 'success',
          title: 'Lengua eliminado exitosamente',
          showConfirmButton: false,
          timer: environment.messageTime
        });
      },
      err => console.log(err)
    );
  }

  get f() { 
    return this.form.controls;
  }
}
