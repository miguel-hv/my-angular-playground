import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaskInputQuantity]'
})
export class MaskInputQuantityDirective {

  @Input() appMaskInputQuantity = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appMaskInputQuantity || 'red');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
