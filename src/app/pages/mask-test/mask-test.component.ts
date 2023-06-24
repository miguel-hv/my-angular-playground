import { Component } from '@angular/core';

@Component({
  selector: 'app-mask-test',
  templateUrl: './mask-test.component.html',
  styleUrls: ['./mask-test.component.scss']
})
export class MaskTestComponent {

  inputQuantity = "";
  inputQuantity2String = "112233";
  inputQuantity2Number = 112233;

  changeInput2(event: Event) {
    // this.inputQuantity2 = parseInt((event.target as HTMLInputElement).value);
    this.inputQuantity2String = (event.target as HTMLInputElement).value;
    // this.inputQuantity2Number = parseInt(this.inputQuantity2String);
    this.inputQuantity2Number = Number(this.inputQuantity2String.split('.').join(''));
  }

}
