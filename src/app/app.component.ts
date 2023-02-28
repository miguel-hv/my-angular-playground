import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-playground';
  color = '';
  inputQuantity = "";
  inputQuantity2String = "112233";
  inputQuantity2Number = 112233;

  changeInput2(event: Event) {
    // this.inputQuantity2 = parseInt((event.target as HTMLInputElement).value);
    this.inputQuantity2String = (event.target as HTMLInputElement).value;
    // this.inputQuantity2Number = parseInt(this.inputQuantity2String);
    this.inputQuantity2Number = parseInt(this.inputQuantity2String.split('.').join(''));
    console.log(this.inputQuantity2String.split('.').join());
    console.log('%c'+this.inputQuantity2String, 'color: blue');
    console.log('%c'+this.inputQuantity2Number, 'color: green');
  }

}
