import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pais } from 'src/app/_models/pais';
import { PaisService } from 'src/app/_services/pais.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-pais-estado',
  templateUrl: './pais-estado.component.html',
  styleUrls: ['./pais-estado.component.css']
})
export class PaisEstadoComponent implements OnInit {

  idPais:number;
  pais:Pais;
  paisForm:FormGroup;
  submitted:Boolean = false;

  constructor(
    private router: ActivatedRoute,
    private paisService: PaisService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.paisForm = this.fb.group({
      "idPais": [''],
      "pais": ['', Validators.required],
      "abreviatura": ['']
    });
    this.idPais = parseInt(this.router.snapshot.paramMap.get("paisId"));
    this.getPais();
  }

  getPais() {
    this.paisService.getPais(this.idPais).subscribe(
      res => this.pais = res,
      err => console.log(err)
    );
  }

  openModalPais() {
    this.paisForm.patchValue(this.pais);
    this.submitted = false;
    $("#paisModal").modal("show");
  }

  updatePais() {
    this.submitted = true;

    if(this.paisForm.invalid){
      console.log('Formulario inválido');
      return;
    }

    this.paisService.updatePais(this.paisForm.value).subscribe(
      res => {
        this.getPais();
        $("#paisModal").modal("hide");
        Swal.fire({
          icon: 'success',
          title: 'Pais actualizado exitosamente',
          showConfirmButton: false,
          timer: environment.messageTime
        });
      },
      err => console.log(err)
    );
  }

  get f() { return this.paisForm.controls; }

}
