import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
 exports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule
 ]
})

export class MaterialModule {}