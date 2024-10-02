import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTwoComponent } from './form-two/form-two.component';
import { SharedModule } from '../../shared/shared.module';
import { FormTwoRoutingModule } from './form-two-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormTwoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormTwoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FormTwoModule { }
