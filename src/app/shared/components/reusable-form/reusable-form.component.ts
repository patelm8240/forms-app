import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reusable-form',
  templateUrl: './reusable-form.component.html',
  styleUrl: './reusable-form.component.scss'
})
export class ReusableFormComponent {
  @Input() initialData: any = {};
  @Output() formSubmit = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      field1: ['', Validators.required],
      field2: ['', Validators.required]
    });
    this.form.patchValue(this.initialData);
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
      this.form.reset();
    }
  }
}
