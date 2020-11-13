import { Component, OnInit, ViewChild } from '@angular/core';
import { Frase } from 'src/app/_models/frase';
import { FraseService } from 'src/app/_services/frase.service';
import Swal from 'sweetalert2';
import { FormularioComponent } from '../formulario/formulario.component';

declare var $: any;
const messageTime:number = 1000;

@Component({
  selector: 'app-listado-frase',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @ViewChild(FormularioComponent) modalFormulario:FormularioComponent;

  frases:Frase[];

  constructor(private fraseService:FraseService) { }

  ngOnInit(): void { 
    this.getFrases();
  }

  openModal() {
    this.modalFormulario.open();
  }

  getFrases() {
    this.fraseService.getFrases().subscribe(
      res => this.frases = res,
      err => console.log(err)
    );
  }

  deleteFrase(id:number) {
    this.fraseService.deleteFrase(id).subscribe(
      res => {
        this.getFrases();
        Swal.fire({
          icon: 'success',
          title: 'Estado eliminado exitosamente',
          showConfirmButton: false,
          timer: messageTime
        });
      },
      err => console.log(err)
    );
  }
}
