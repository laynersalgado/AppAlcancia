import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-alcancia',
  templateUrl: './alcancia.component.html',
  styleUrls: ['../app.component.scss']
})
export class AlcanciaComponent {
  title = 'alcancia-App';
  toppings = new FormControl();
  cardAlcancia= true;

  alcanciaList: string[] = ['$50', '$100', '$200', '$500', '$1000'];
  cantidadMonedas=0;
  cantidadDinero=0;

  vertical = false;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;

  moneda50 = 0;
  moneda100 = 0;
  moneda200 = 0;
  moneda500 = 0;
  moneda1000 = 0;

  tickInterval = 1;

  checked50 = false;
  checked100 = false;
  checked200 = false;
  checked500 = false;
  checked1000 = false;

  cantidad50 =0;
  cantidad100 =0;
  cantidad200 =0;
  cantidad500 =0;
  cantidad1000 =0;
  
  constructor(private _snackBar: MatSnackBar) { }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  insertar(){

    this.cantidad50 = this.cantidad50 + this.moneda50;
    this.moneda50 =0;
    this.cantidad100 = this.cantidad100 + this.moneda100;
    this.moneda100 =0;
    this.cantidad200 = this.cantidad200 + this.moneda200;
    this.moneda200 =0;
    this.cantidad500 = this.cantidad500 + this.moneda500;
    this.moneda500 =0;
    this.cantidad1000 = this.cantidad1000 + this.moneda1000;
    this.moneda1000 =0;

    
    this.calcularCantidadMonedas()
    this.calcularCantidadDinero();
    this.openSnackBar("ahorrado!","aceptar");
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);

    
    setTimeout(() => {
      this._snackBar.dismiss();
     },1300);

  }

  vaciar(){
    this.cantidad50 =0;
    this.cantidad100 =0;
    this.cantidad200 =0;
    this.cantidad500 =0;
    this.cantidad1000 =0;
    this.cantidadMonedas =0;
    this.cantidadDinero =0;

    this.openSnackBar("vaciado!","aceptar");
  }

  calcularCantidadMonedas(){
    this.cantidadMonedas =     this.cantidad50 + 
                               this.cantidad100 + 
                               this.cantidad200 + 
                               this.cantidad500 +
                               this.cantidad1000;
    }
    
      calcularCantidadDinero(){
        this.cantidadDinero = this.cantidad50*50 + 
                              this.cantidad100*100 + 
                              this.cantidad200*200 +
                              this.cantidad500*500 +
                              this.cantidad1000*1000;
      }
}
