import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges {


  @Input() tipoDni: string = 'dni';
  formularioDocumento: FormGroup;
  variabbleNueva: string = "DIVER";

  constructor(private form: FormBuilder) {
    this.formularioDocumento = this.form.group({
      dni: [''],


    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.variabbleNueva = !changes?.['tipoDni'].firstChange ? changes?.['tipoDni'].currentValue : 'DIVER';

  }

  hasError(controlName: string, errorType: string) {
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched;
  }
}
