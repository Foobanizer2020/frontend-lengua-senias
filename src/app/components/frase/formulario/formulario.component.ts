import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fcategoria } from 'src/app/_models/fcategoria';
import { Frase } from 'src/app/_models/frase';
import { Lengua } from 'src/app/_models/lengua';
import { FcategoriaService } from 'src/app/_services/fcategoria.service';
import { FraseService } from 'src/app/_services/frase.service';
import { LenguaService } from 'src/app/_services/lengua.service';

declare var $: any;

@Component({
  selector: 'app-formulario-frase',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() notify = new EventEmitter();
  @Input() formStatus:String;
  fraseForm:FormGroup;
  submitted:Boolean;
  frase:Frase;
  file:File;
  lenguas:Lengua[];
  fcategorias:Fcategoria[];

  constructor(
    private formBuilder:FormBuilder,
    private fraseService:FraseService,
    private lenguaService:LenguaService,
    private fcategoriaService:FcategoriaService
  ) { }

  ngOnInit(): void {
    this.fraseForm = this.formBuilder.group({
      idFormulario: [''],
      contenido: ['', Validators.required],
      gif: [''],
      fcategoria: ['', Validators.required],
      lengua: ['', Validators.required],
    });
    this.getLenguas();
    this.getFcategorias();
  }
  
  open() {
    if (this.formStatus == 'CREATE') {
      this.fraseForm.reset();
    } else {
      // TODO: Asignar los datos de un objeto Frase al formulario.
    }
    $("#fraseModal").modal("show");
  }

  getLenguas() {
    this.lenguaService.getLenguas().subscribe(
      res => this.lenguas = res,
      err => console.log(err)
    );
  }

  getFcategorias() {
    this.fcategoriaService.getFcategorias().subscribe(
      res => this.fcategorias = res,
      err => console.log(err)
    );
  }

  createFrase() {
    this.submitted = true;
    
    if (this.fraseForm.invalid) {
      console.log("Formulario inválido.")
      return;
    }

    this.convertFile(this);
  }

  updateFrase() {
    // TODO: Implementarlo xD
  }
  
  fileSelected(event) {
    this.file  = <File> event.target.files[0];
  }

  convertFile(thiss) {
    let reader = new FileReader();
    reader.readAsDataURL(thiss.file);
    reader.onload = function() {
      thiss.fraseForm.controls['gif'].setValue(reader.result);

      thiss.fraseService.createFrase(thiss.fraseForm.value).subscribe(
        res => {
          $("#fraseModal").modal("hide");
          thiss.submitted = false;
          thiss.notify.emit();
        },
        err => console.error(err)
      );
    };
    reader.onerror = function(error) {
      console.log('Error: ', error);
    };
  }

  get f() { 
    return this.fraseForm.controls;
  }
}
