import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  alerta = 'alert-primary';
  propiedades = {
    danger: true
  };
  loading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

}
