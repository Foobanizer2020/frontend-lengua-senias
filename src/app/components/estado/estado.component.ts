import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estado } from 'src/app/_models/estado';
import { EstadoService } from 'src/app/_services/estado.service';
import Swal from 'sweetalert2';

declare var $: any;

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
  submitted:Boolean = false;
  formStatus:String;

  messageTime:number = 1000;

  constructor(
    private srvEstado: EstadoService, 
    private formBuilder: FormBuilder  
  ) { }

  ngOnInit(): void {
    this.estadoForm = this.formBuilder.group({
      "idEstado": [''],
      "nombre": ['', Validators.required],
      "pais": [this.idPais]
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

  openRegistroModal() {
    this.estadoForm.reset();
    this.submitted = false;
    this.formStatus = "CREATE";
    $("#estadoModal").modal("show");
  }

  createEstado() {
    this.submitted = true;

    if(this.estadoForm.invalid){
      console.log('Formulario inválido');
      return;
    }

    this.estadoForm.value.pais = this.idPais;

    this.srvEstado.createEstado(this.estadoForm.value).subscribe(
      res => {
        this.getEstados();
        $("#estadoModal").modal("hide");
        Swal.fire({
          icon: 'success',
          title: 'Estado guardado exitosamente',
          showConfirmButton: false,
          timer: this.messageTime
        });
      },
      err => {
        this.getEstados();
        console.error(err);
      }
    );
  }

  openEdicionModal(estado:Estado) {
    this.estadoForm.setValue(estado);
    this.submitted = false;
    this.formStatus = "UPDATE";
    $("#estadoModal").modal("show");
  }

  updateEstado() {
    this.submitted = true;

    if(this.estadoForm.invalid){
      console.log('Formulario inválido');
      return;
    }

    this.srvEstado.updateEstado(this.estadoForm.value).subscribe(
      res => {
        this.getEstados();
        $("#estadoModal").modal("hide");
        Swal.fire({
          icon: 'success',
          title: 'Estado actualizado exitosamente',
          showConfirmButton: false,
          timer: this.messageTime
        });
      },
      err => console.error(err)
    );
  }

  deleteEstado(id:number) {
    this.srvEstado.deleteEstado(id).subscribe(
      res => {
        this.getEstados();
        Swal.fire({
          icon: 'success',
          title: 'Estado eliminado exitosamente',
          showConfirmButton: false,
          timer: this.messageTime
        });
      },
      err => {}
    );
  }

  get f() { 
    return this.estadoForm.controls;
  }
}
