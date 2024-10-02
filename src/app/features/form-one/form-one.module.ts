import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormOneComponent } from './form-one/form-one.component';
import { SharedModule } from '../../shared/shared.module';
import { FormOneRoutingModule } from './form-one-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormOneComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormOneRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [FormOneComponent]
})
export class FormOneModule { }
