import { Component, OnInit } from '@angular/core';

import { Pais}  from '../../_models/pais';
import { PaisService } from '../../_services/pais.service';

import  { FormBuilder, Validators, FormGroup} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  paises: Pais[] | any;
  pais: Pais | any;
  paisForm: FormGroup;
  submitted = false;

  constructor( private paisService: PaisService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     // Inicie el formulario vacio
     this.paisForm = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      abreviatura: ['']
    });

    // Consulte lista paises
    this.getPaises();
  }

  // Consultar lista de paises
  getPaises(){
    this.paises = [];
    this.paisService.getPaises().subscribe(
      res => {
        this.paises = res;
        //console.log(this.paises)
      },
      err => console.error(err)
  
    )
  }

  // Consultar un  pais
  getPais(id){
    this.pais = null;
    this.paisService.getPais(id).subscribe(
      res => {
        this.pais = res;
      },
      err => console.error(err)
    )
  }

  // Eliminar un  pais
  deletePais(id){
    this.paisService.deletePais(id).subscribe(
      res => {
        this.getPaises();
      },
      err => console.error(err)
    )
  }

  // Crear un pais
  createPais(){
    this.submitted = true;

    if(this.paisForm.invalid){
      console.log('Formulario inválido');
      return;
    }

    this.paisService.createPais(this.paisForm.value).subscribe(
      res => {
        this.getPaises();
      },
      err => console.error(err)
    )
  }

  // Actualizar un pais
  updatePais(){
    this.submitted = true;

    if(this.paisForm.invalid){
      console.log('Formulario inválido');
      return;
    }

    this.paisService.updatePais(this.paisForm.value).subscribe(
      res => {
        this.getPaises();
      },
      err => console.error(err)
    )
  }

  get f() { return this.paisForm.controls;}
  
  openModalPais(){    
    this.paisForm.reset();    
    $("#paisModal").modal("show");  


  }

}
