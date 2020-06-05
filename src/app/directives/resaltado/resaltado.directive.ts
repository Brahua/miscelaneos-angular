import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') nuevoColor: string;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') mouseEntro() {
    this.el.nativeElement.style.backgroundColor = this.nuevoColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

}
