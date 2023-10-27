import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[mask-quantity]'
})
export class MaskInputQuantityDirective {

  //chatgpt:

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    value = value !== '' ? parseInt(value, 10).toString() : ''; // Remove leading zeros

    if (value !== '') {
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Add dots every three digits
    }

    input.value = value;
  }

}
