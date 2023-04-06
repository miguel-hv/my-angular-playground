import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaskInputQuantityDirective } from './mask-input-quantity.directive';
import { MaskTestComponent } from './pages/mask-test/mask-test.component';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { MaterialComponent } from './pages/material/material.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    MaskInputQuantityDirective,
    MaskTestComponent,
    HighlightDirective,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
