import { Component, OnInit, ViewChild } from '@angular/core';
import {Senia} from 'src/app/_models/senia';
import {SeniaService} from 'src/app/_services/senia.service';
import { FormularioComponent } from '../formulario/formulario.component';
import Swal from 'sweetalert2';


declare var $: any;
const messageTime:number = 1000;

@Component({
  selector: 'app-listado-senia',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  @ViewChild(FormularioComponent) modalFormulario:FormularioComponent;
 
  senias:Senia[];

  constructor( private seniaService:SeniaService) { }

  ngOnInit(): void {
    this.getSenias();
  }
  openModal() {
    this.modalFormulario.open();
  }

  getSenias() {
    this.seniaService.getSenias().subscribe(
      res => this.senias = res,
      err => console.log(err)
    );
  }

  deleteSenia(id:number) {
    this.seniaService.deleteSenia(id).subscribe(
      res => {
        this.getSenias();
        Swal.fire({
          icon: 'success',
          title: 'Senia eliminada exitosamente',
          showConfirmButton: false,
          timer: messageTime
        });
      },
      err => console.log(err)
    );
  }

}
