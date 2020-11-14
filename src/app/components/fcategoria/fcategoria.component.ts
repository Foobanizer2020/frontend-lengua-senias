import { Component, OnInit } from '@angular/core';

import {Fcategoria} from '../../_models/fcategoria';
import {FcategoriaService} from '../../_services/fcategoria.service';

import  { FormBuilder, Validators, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';


declare var $: any;

@Component({
  selector: 'app-fcategoria',
  templateUrl: './fcategoria.component.html',
  styleUrls: ['./fcategoria.component.css']
})
export class FcategoriaComponent implements OnInit {

  fcategorias: Fcategoria [];
  fcategoria: Fcategoria;
  fcategoriaForm: FormGroup;
  submitted:Boolean = false;
  formStatus:String;

  messageTime:number = 1000;


  constructor(
    private fcategoriaService:FcategoriaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fcategoriaForm = this.formBuilder.group({
      "idFcategoria": [''],
      "nombre":['',Validators.required],
    });
    
    this.getFcategorias();
  }

  getFcategorias(){
    this.fcategorias = [];
    this.fcategoriaService.getFcategorias().subscribe(
      res => {
        this.fcategorias = res;
        console.log(this.fcategorias)
      },
      err => console.error(err)
    )
  }

  getFcategoria(id){
    this.fcategoria = null;
    this.fcategoriaService.getFcategoria(id).subscribe(
      res => {
        this.fcategoria = res;
      },
      err => console.error(err)
    )
  }

  deleteFcategoria(id){
    this.fcategoriaService.deleteFcategoria(id).subscribe(
      res => {
        this.getFcategorias();
        Swal.fire({
          icon: 'success',
          title: 'Fcategoria eliminada exitosamente',
          showConfirmButton: false,
          timer: this.messageTime
        });
      },
      err => console.error(err)
    )
  }
  openRegistroModal() {
    this.fcategoriaForm.reset();
    this.submitted = false;
    this.formStatus = "CREATE";
    $("#fcategoriaModal").modal("show");
  }
  createFcategoria(){
    this.submitted = true;

    if(this.fcategoriaForm.invalid){
      console.log('Formulario inválido');
      return;
    }
    this.fcategoriaService.createFcategoria(this.fcategoriaForm.value).subscribe(
      res => {
        this.getFcategorias();
        $("#fcategoriaModal").modal("hide");
        Swal.fire({
          icon: 'success',
          title: 'Fcategoria guardada exitosamente',
          showConfirmButton: false,
          timer: this.messageTime
        });
      },
      err => 
      console.error(err)
    )
  }

  updateFcategoria(){
    this.submitted = true;

    if(this.fcategoriaForm.invalid){
      console.log('Formulario inválido');
      return;
    }

    this.fcategoriaService.updateFcategoria(this.fcategoriaForm.value).subscribe(
      res => {
        this.getFcategorias();
        $("#fcategoriaModal").modal("hide");
        Swal.fire({
          icon: 'success',
          title: 'Fcategoria actualizada exitosamente',
          showConfirmButton: false,
          timer: this.messageTime
        });
      },
      err => console.error(err)
    )
  }

  get f() { return this.fcategoriaForm.controls;}
  openModalFcategoria(){    
    this.fcategoriaForm.reset();    
    $("#fcategoriaModal").modal("show");  


  }

}
