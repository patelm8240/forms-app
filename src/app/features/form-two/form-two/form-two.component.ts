import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../../core/services/form-data.service';
import { FormTwoData } from '../../../core/models/form-data.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrl: './form-two.component.scss'
})
export class FormTwoComponent {
  form!: FormGroup;
  notes: string = '';

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      checkbox1: [false],
      checkbox2: [false],
      field1: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData: FormTwoData = {
        ...this.form.value,
        notes: this.notes
      };
      this.formDataService.submitForm(formData).subscribe({
        next: response => {
          console.log('Form submitted successfully', response);
          this.form.reset();
          this.notes = '';
          this.snackBar.open('Form submitted successfully', 'Close', {
            duration: 5000,
          });
        },
        error: error => console.error('Error submitting form:', error)
      });
    }
  }

  onNotesChanged(notes: string) {
    this.notes = notes;
  }
}
