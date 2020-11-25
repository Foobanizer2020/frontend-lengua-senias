import { Component, OnInit,EventEmitter, Input,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Senia} from 'src/app/_models/senia';
import {SeniaService} from 'src/app/_services/senia.service';


declare var $: any;

@Component({
  selector: 'app-formulario-senia',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() notify = new EventEmitter();
  @Input() formStatus:String;
  seniaForm:FormGroup;
  submitted:Boolean;
  @Input() senia:Senia;
  file:File;
 

  constructor(
    private formBuilder:FormBuilder,
    private seniaService:SeniaService,
  ) { }

  ngOnInit(): void {
    this.seniaForm = this.formBuilder.group({
      idSenia: [''],
      contenido: ['', Validators.required],
      gif: ['', Validators.required],
    });
  }

  open() {
    this.submitted = false;
    if (this.formStatus == 'CREATE') {
      this.seniaForm.reset();
    } else {
      this.seniaForm.setValue(this.senia);
    }
    $("#seniaModal").modal("show");
  }

  createSenia() {
    this.submitted = true;
    
    if (this.seniaForm.invalid) {
      console.log("Formulario inválido.")
      return;
    }

    this.convertFile(this);
  }

  updateSenia() {
    this.submitted = true;
    
    if (this.seniaForm.invalid) {
      console.log("Formulario inválido.")
      return;
    }

    this.seniaForm.controls['idSenia'].setValue(this.senia.idSenia);
    this.convertFile(this);
  }
  
  fileSelected(event) {
    this.file  = <File> event.target.files[0];
    this.seniaForm.controls['gif'].setValue('make-valid');
  }

  convertFile(thiss) {
    let reader = new FileReader();
    reader.readAsDataURL(thiss.file);
    reader.onload = function() {
      thiss.seniaForm.controls['gif'].setValue(reader.result);

      thiss.seniaService.createSenia(thiss.seniaForm.value).subscribe(
        res => {
          $("#seniaModal").modal("hide");
          thiss.submitted = false;
          thiss.notify.emit();
        },
        err => console.error(err)
      );
    };
    reader.onerror = function(error) {
      console.log('Error: ', error);
    };
  }

  get f() { 
    return this.seniaForm.controls;
  }

}
