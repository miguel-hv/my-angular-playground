import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mask-quantity]'
})
export class MaskInputQuantityDirective {

  @HostListener('input', ['$event']) onKeyDown(event: KeyboardEvent){

    const input = event.target as HTMLInputElement;
    
    let parsed = input.value.split('.').join("");

    if (parsed.length > 15) {
      parsed = parsed.substring(0, 15);
    }

    let masked = parsed.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    input.value = masked;

  }

}
