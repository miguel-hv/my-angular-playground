import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaskInputQuantityDirective } from './mask-input-quantity.directive';
import { MaskTestComponent } from './pages/mask-test/mask-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MaskInputQuantityDirective,
    MaskTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
