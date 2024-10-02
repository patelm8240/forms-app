import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableFormComponent } from './components/reusable-form/reusable-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotesComponent } from './components/notes/notes.component';

@NgModule({
  declarations: [
    ReusableFormComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    ReusableFormComponent,
    NotesComponent
  ]
})
export class SharedModule { }
