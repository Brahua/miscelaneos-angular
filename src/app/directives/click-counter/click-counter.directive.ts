import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'li[appClickCounter]'
})
export class ClickCounterDirective {

  clicksNumber = 0;
  @HostBinding('style.opacity') opacity = 0.1;
  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('a', btn, 'Numero clicks:', this.clicksNumber++);
    this.opacity += .1;
  }

}
