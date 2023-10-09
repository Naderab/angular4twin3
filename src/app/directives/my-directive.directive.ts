import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.background = 'white';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.background = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.background = 'white';
  }
}
