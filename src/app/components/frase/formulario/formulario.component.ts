import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-formulario-frase',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  fraseForm:FormGroup;
  formStatus:String;
  submitted:Boolean;

  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.fraseForm = this.formBuilder.group({
      "contenido": ['', Validators.required]
    });
  }

  createFrase() {}

  updateFrase() {}

  open() {
    $("#fraseModal").modal("show");
  }

  get f() { 
    return this.fraseForm.controls;
  }
}
