import { Component } from '@angular/core';
import { FormDataService } from '../../../core/services/form-data.service';
import { FormOneData } from '../../../core/models/form-data.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrl: './form-one.component.scss'
})
export class FormOneComponent {
  notes: string = '';
  resetTrigger: number = 0;

  constructor(private formDataService: FormDataService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(formData: any) {
    const completeData: FormOneData = {
      ...formData,
      notes: this.notes
    };
    this.formDataService.submitForm(completeData).subscribe({
      next: response => {
        console.log('Form submitted successfully', response)
        this.notes = '';
        this.resetTrigger++;
        this.snackBar.open('Form submitted successfully', 'Close', {
          duration: 5000,
        });
      },
      error: error => console.error('Error submitting form:', error)
    });
  }

  onNotesChanged(notes: string) {
    this.notes = notes;
  }
}
