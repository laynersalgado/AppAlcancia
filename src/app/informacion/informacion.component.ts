import { Component, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['../app.component.scss']
})
export class InformacionComponent {
  @Input() cantidadMonedasInfo = 0;
  @Input() cantidadDineroInfo = 0;
  @Input() cantidad50 = 0;
  @Input() cantidad100 = 0;
  @Input() cantidad200 = 0;
  @Input() cantidad500 = 0;
  @Input() cantidad1000 = 0;

  title = 'alcancia-App';
  formInfoAlcancia = new FormControl();
  cardInfoAlcancia= true;

  alcanciaInfoList: string[] = ['$50', '$100', '$200', '$500', '$1000'];

  MuestraMonedas50 = false;
  MuestraMonedas100 = false;
  MuestraMonedas200 = false;
  MuestraMonedas500 = false;
  MuestraMonedas1000 = false;

  MuestraDinero50 = false;
  MuestraDinero100 = false;
  MuestraDinero200 = false;
  MuestraDinero500 = false;
  MuestraDinero1000 = false;


  constructor() {}

  somethingChanged(){
    this.MuestraMonedas50=false;
    this.MuestraMonedas100=false;
    this.MuestraMonedas200=false;
    this.MuestraMonedas500=false;
    this.MuestraMonedas1000=false;
    for (let index = 0; index < this.formInfoAlcancia.value.length; index++) {
        if(this.formInfoAlcancia.value[index]=='$50')
        this.MuestraMonedas50=true;

        if(this.formInfoAlcancia.value[index]=='$100')
        this.MuestraMonedas100=true;

        if(this.formInfoAlcancia.value[index]=='$200')
        this.MuestraMonedas200=true;

        if(this.formInfoAlcancia.value[index]=='$500')
        this.MuestraMonedas500=true;

        if(this.formInfoAlcancia.value[index]=='$1000')
        this.MuestraMonedas1000=true;
    }
  }

   somethingChangedDinero(){
    this.MuestraDinero50=false;
    this.MuestraDinero100=false;
    this.MuestraDinero200=false;
    this.MuestraDinero500=false;
    this.MuestraDinero1000=false;
    for (let index = 0; index < this.formInfoAlcancia.value.length; index++) {
        if(this.formInfoAlcancia.value[index]=='$50')
        this.MuestraDinero50=true;

        if(this.formInfoAlcancia.value[index]=='$100')
        this.MuestraDinero100=true;

        if(this.formInfoAlcancia.value[index]=='$200')
        this.MuestraDinero200=true;

        if(this.formInfoAlcancia.value[index]=='$500')
        this.MuestraDinero500=true;

        if(this.formInfoAlcancia.value[index]=='$1000')
        this.MuestraDinero1000=true;
    }
  }
}
