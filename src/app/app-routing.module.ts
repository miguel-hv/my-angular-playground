import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaskTestComponent } from './pages/mask-test/mask-test.component';
import { MaterialComponent } from './pages/material/material.component';
import { FormArrayComponent } from './pages/form-array/form-array.component';

const routes: Routes = [
  { path: 'mask-test', component: MaskTestComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'form-array', component: FormArrayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
