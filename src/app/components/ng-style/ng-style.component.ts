import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': '15px'}">
      Hola mundo... esta es una etiqueta
    </p>

    <p [style.fontSize.px]="tamanio">
      Hola mundo... esta es otra etiqueta
    </p>

    <button class="btn btn-primary mr-3" (click)="tamanio = tamanio+5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamanio = tamanio-5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamanio = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
