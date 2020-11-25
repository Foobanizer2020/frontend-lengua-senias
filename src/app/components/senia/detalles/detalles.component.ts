import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Senia} from 'src/app/_models/senia';
import { FormularioComponent } from '../formulario/formulario.component';
import {SeniaService} from 'src/app/_services/senia.service';

@Component({
  selector: 'app-detalles-senias',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @ViewChild(FormularioComponent) modalFormulario:FormularioComponent;

  senia:Senia;

  constructor(
    private route: ActivatedRoute, 
    private seniaService: SeniaService 
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.seniaService.getSenia(parseInt(params.get('idSenia'))).subscribe(
        res => {
          this.senia = res;
        },
        err => console.log(err)
      );
    });
  }

  openModal() {
    this.modalFormulario.open();
  }

  reloadFrase() {
    this.seniaService.getSenia(this.senia.idSenia).subscribe(
      res => {
        this.senia = res;
      },
      err => console.log(err)
    );
  } 

}
