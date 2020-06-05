import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0,
        backgroundColor: 'red',
        transform: 'rotate3d(0,0,0,0deg)'
      })),
      state('final', style({
        opacity: 1,
        backgroundColor: 'blue',
        transform: 'rotate3d(5,10,20,30deg)'
      })),
      transition('inicial => final', animate(1000)),
      transition('final => inicial', animate(500))
    ])
  ]
})
export class AnimationComponent implements OnInit {

  state = 'inicial';

  constructor() {
    setTimeout(() => {
      this.animar();
    }, 2000);
  }

  ngOnInit(): void {
  }

  animar() {
    this.state = this.state === 'inicial' ? 'final' : 'inicial';
  }

  animacionInicia(e) {
    console.log('Inicio animacion');
    console.log(e);
  }

  animacionTermina(e) {
    console.log('Termina animacion');
    console.log(e);
  }



}
