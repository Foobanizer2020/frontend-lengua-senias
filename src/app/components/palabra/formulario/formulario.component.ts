import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/_models/categoria';
import { Palabra } from 'src/app/_models/palabra';
import { CategoriaService } from 'src/app/_services/categoria.service';
import { PalabraService } from 'src/app/_services/palabra.service';

declare var $: any;

@Component({
  selector: 'app-formulario-palabra',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() notify = new EventEmitter();
  @Input() formStatus:String;
  palabraForm:FormGroup;
  submitted:Boolean;
  @Input() palabra:Palabra;
  categorias:Categoria[];

  constructor(
    private formBuilder:FormBuilder,
    private palabraService:PalabraService,
    private categoriaService:CategoriaService
  ) { }

  ngOnInit(): void {
    this.palabraForm = this.formBuilder.group({
      idPalabra: [''],
      nombre: ['', Validators.required],
      contextoSenia: ['', Validators.required],
      definicion: ['', Validators.required],
      categoria: this.formBuilder.group({
        idCategoria: ['', Validators.required]
      })
    });
    this.getCategorias();
  }
  
  open() {
    this.submitted = false;
    if (this.formStatus == 'CREATE') {
      this.palabraForm.reset();
    } else {
      this.palabraForm.patchValue(this.palabra);      
    }
    $("#palabraModal").modal("show");
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe(
      res => this.categorias = res,
      err => console.log(err)
    );
  }

  createPalabra() {
    this.submitted = true;
    
    if (this.palabraForm.invalid) {
      console.log("Formulario inválido.")
      return;
    }

    this.palabraService.createPalabra(this.palabraForm.value).subscribe(
      res => {
        $("#palabraModal").modal("hide");
        this.submitted = false;
        this.notify.emit();
      },
      err => console.error(err)
    );
  }

  updatePalabra() {
    this.submitted = true;
    
    if (this.palabraForm.invalid) {
      console.log("Formulario inválido.")
      return;
    }

    this.palabraForm.controls['idPalabra'].setValue(this.palabra.idPalabra);
    
    this.palabraService.updatePalabra(this.palabraForm.value).subscribe(
      res => {
        $("#palabraModal").modal("hide");
        this.submitted = false;
        this.notify.emit();
      },
      err => console.error(err)
    );
  }

  get f() { 
    return this.palabraForm.controls;
  }
}
