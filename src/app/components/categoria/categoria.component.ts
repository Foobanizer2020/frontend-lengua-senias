import { Component, OnInit } from '@angular/core';
import { TokenStorageService }from 'src/app/_services/autenticacion/token-storage.service'
import {Categoria} from '../../_models/categoria';
import {CategoriaService} from '../../_services/categoria.service';

import  { FormBuilder, Validators, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {


  categorias: Categoria [];
  categoria: Categoria;
  categoriaForm: FormGroup;
  submitted:Boolean = false;
  formStatus:String;
  isAdmin:Boolean;

  messageTime:number = 1000;


  constructor(
    private categoriaService:CategoriaService,
    private formBuilder: FormBuilder,
    private tokenService:TokenStorageService

  ) { }

  ngOnInit(): void {
    this.categoriaForm = this.formBuilder.group({
      "idCategoria": [''],
      "nombre":['',Validators.required],
    });
    
    this.getCategorias();
    this.isAdmin = this.tokenService.isAdmin();
  }

  getCategorias(){
    this.categorias = [];
    this.categoriaService.getCategorias().subscribe(
      res => {
        this.categorias = res;
        console.log(this.categorias)
      },
      err => console.error(err)
    )
  }

  getCategoria(id){
    this.categoria = null;
    this.categoriaService.getCategoria(id).subscribe(
      res => {
        this.categoria = res;
      },
      err => console.error(err)
    )
  }

  deleteCategoria(id){
    this.categoriaService.deleteCategoria(id).subscribe(
      res => {
        this.getCategorias();
        Swal.fire({
          icon: 'success',
          title: 'Categoria eliminada exitosamente',
          showConfirmButton: false,
          timer: this.messageTime
        });
      },
      err => console.error(err)
    )
  }
  openRegistroModal() {
    this.categoriaForm.reset();
    this.submitted = false;
    this.formStatus = "CREATE";
    $("#categoriaModal").modal("show");
  }
  openEdicionModal(categoria: Categoria) {
    this.categoriaForm.patchValue(categoria);
    this.submitted = false;
    this.formStatus = "UPDATE";
    $("#categoriaModal").modal("show");
  }
  createCategoria(){
    this.submitted = true;

    if(this.categoriaForm.invalid){
      console.log('Formulario inválido');
      return;
    }
    this.categoriaService.createCategoria(this.categoriaForm.value).subscribe(
      res => {
        this.getCategorias();
        $("#categoriaModal").modal("hide");
        Swal.fire({
          icon: 'success',
          title: 'Categoria guardada exitosamente',
          showConfirmButton: false,
          timer: this.messageTime
        });
      },
      err => 
      console.error(err)
    )
  }

  updateCategoria(){
    this.submitted = true;

    if(this.categoriaForm.invalid){
      console.log('Formulario inválido');
      return;
    }

    this.categoriaService.updateCategoria(this.categoriaForm.value).subscribe(
      res => {
        this.getCategorias();
        $("#categoriaModal").modal("hide");
        Swal.fire({
          icon: 'success',
          title: 'Categoria actualizada exitosamente',
          showConfirmButton: false,
          timer: this.messageTime
        });
      },
      err => console.error(err)
    )
  }

  get f() { return this.categoriaForm.controls;}
  openModalCategoria(){    
    this.categoriaForm.reset();    
    $("#categoriaModal").modal("show");  


  }

}