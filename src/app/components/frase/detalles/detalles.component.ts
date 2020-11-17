import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Frase } from 'src/app/_models/frase';
import { FraseService } from 'src/app/_services/frase.service';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-detalles-frase',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @ViewChild(FormularioComponent) modalFormulario:FormularioComponent;

  frase:Frase;

  constructor(
    private route: ActivatedRoute,
    private fraseService: FraseService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.fraseService.getFrase(parseInt(params.get('idFrase'))).subscribe(
        res => {
          this.frase = res;
        },
        err => console.log(err)
      );
    });
  }

  openModal() {
    this.modalFormulario.open();
  }

  reloadFrase() {
    this.fraseService.getFrase(this.frase.idFrase).subscribe(
      res => {
        this.frase = res;
      },
      err => console.log(err)
    );
  } 
}
