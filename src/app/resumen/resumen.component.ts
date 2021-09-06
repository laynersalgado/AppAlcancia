import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['../app.component.scss']
})
export class ResumenComponent implements OnInit {

  @Input() cantidadMonedas = 0;
  @Input() cantidadDinero = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
