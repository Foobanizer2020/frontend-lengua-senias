import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Idioma } from 'src/app/_models/idioma';
import { Pais } from 'src/app/_models/pais';
import { IdiomaService } from 'src/app/_services/idioma.service';
import { PaisService } from 'src/app/_services/pais.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

declare var $:any;

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {

  form:FormGroup;
  idiomas:Idioma[];
  idioma:Idioma;
  submitted:boolean = false;
  formStatus:string = 'CREATE';
  paises:Pais[];

  constructor(
    private idiomaService:IdiomaService,
    private paisService:PaisService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      "idIdioma": [''],
      "nombre": ['', Validators.required],
      "abreviatura": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      "paises": [[]]
    });

    this.getIdiomas();
    this.getPaises();
  }

  getPaises() {
    this.paisService.getPaises().subscribe(
      res => this.paises = res,
      err => console.log(err)
    );
  }

  getIdiomas() {
    this.idiomaService.getAll().subscribe(
      res => {
        this.idiomas = res;
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

  openEdicionModal(idioma) {
    this.form.setValue(idioma);
    this.submitted = false;
    this.formStatus = "UPDATE";
    $("#formularioModal").modal("show");
  }

  createIdioma() {
    this.submitted = true;
    if(this.form.invalid) {
      console.log("Formulario inválido");
      return;
    }

    this.form.patchValue({
      abreviatura: this.form.value["abreviatura"].toUpperCase()
    });

    this.idiomaService.create(this.form.value).subscribe(
      res => {
        $("#formularioModal").modal("hide");
        this.getIdiomas();
        Swal.fire({
          icon: 'success',
          title: 'Idioma agregado exitosamente',
          showConfirmButton: false,
          timer: environment.messageTime
        });
      },
      err => console.log(err)
    );
  }

  updateIdioma() {
    this.submitted = true;

    if(this.form.invalid){
      console.log('Formulario inválido');
      return;
    }

    this.form.patchValue({
      abreviatura: this.form.value["abreviatura"].toUpperCase()
    });

    this.idiomaService.update(this.form.value).subscribe(
      res => {
        this.getIdiomas();
        $("#formularioModal").modal("hide");
        Swal.fire({
          icon: 'success',
          title: 'Idioma actualizado exitosamente',
          showConfirmButton: false,
          timer: environment.messageTime
        });
      },
      err => console.error(err)
    );
  }

  deleteIdioma(id:number) {
    this.idiomaService.delete(id).subscribe(
      res => {
        this.getIdiomas();
        Swal.fire({
          icon: 'success',
          title: 'Idioma eliminado exitosamente',
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
