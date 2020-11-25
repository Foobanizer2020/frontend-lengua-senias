import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Palabra } from 'src/app/_models/palabra';
import { PalabraService } from 'src/app/_services/palabra.service';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-detalles-palabra',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @ViewChild(FormularioComponent) modalFormulario:FormularioComponent;

  palabra:Palabra;

  constructor(
    private route: ActivatedRoute,
    private palabraService: PalabraService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.palabraService.getPalabra(parseInt(params.get('idPalabra'))).subscribe(
        res => {
          this.palabra = res;
        },
        err => console.log(err)
      );
    });
  }

  openModal() {
    this.modalFormulario.open();
  }

  reloadPalabra() {
    this.palabraService.getPalabra(this.palabra.idPalabra).subscribe(
      res => {
        this.palabra = res;
      },
      err => console.log(err)
    );
  } 
}
