import { Component, OnInit, ViewChild } from '@angular/core';
import { Palabra } from 'src/app/_models/palabra';

import { PalabraService } from 'src/app/_services/palabra.service';
import Swal from 'sweetalert2';
import { FormularioComponent } from '../formulario/formulario.component';

declare var $: any;
const messageTime:number = 1000;

@Component({
  selector: 'app-listado-palabra',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @ViewChild(FormularioComponent) modalFormulario:FormularioComponent;

  palabras:Palabra[];

  constructor(private palabraService:PalabraService) { }

  ngOnInit(): void { 
    this.getPalabras();
  }

  openModal() {
    this.modalFormulario.open();
  }

  getPalabras() {
    this.palabraService.getPalabras().subscribe(
      res => this.palabras = res,
      err => console.log(err)
    );
  }

  deletePalabra(id:number) {
    this.palabraService.deletePalabra(id).subscribe(
      res => {
        this.getPalabras();
        Swal.fire({
          icon: 'success',
          title: 'Palabra eliminada exitosamente',
          showConfirmButton: false,
          timer: messageTime
        });
      },
      err => console.log(err)
    );
  }
}
