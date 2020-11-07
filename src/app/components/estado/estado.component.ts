import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estado } from 'src/app/_models/estado';
import { EstadoService } from 'src/app/_services/estado.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  estados:Estado[];
  estado:Estado;
  @Input() idPais:number;
  estadoForm: FormGroup;

  constructor(
    private srvEstado: EstadoService, 
    private formBuilder: FormBuilder  
  ) { }

  ngOnInit(): void {
    this.estadoForm = this.formBuilder.group({
      "idEstado": [''],
      "nombre": ['', Validators.required],
      "pais": ['']
    });

    this.getEstados();
  }

  getEstados() {
    this.srvEstado.getEstados(this.idPais).subscribe(
      res => this.estados = res,
      err => {
        console.log(err);
      }
    );
  }

}
