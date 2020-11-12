import { Component, OnInit, ViewChild } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-listado-frase',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @ViewChild(FormularioComponent) modalFormulario:FormularioComponent;

  constructor() { }

  ngOnInit(): void { }

  openModal() {
    this.modalFormulario.open();
  }

}
