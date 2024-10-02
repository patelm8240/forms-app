import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTwoComponent } from './form-two/form-two.component';

const routes: Routes = [
  { path: '', component: FormTwoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormTwoRoutingModule { }
