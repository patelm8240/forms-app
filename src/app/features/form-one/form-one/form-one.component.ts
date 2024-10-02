import { Component } from '@angular/core';
import { FormDataService } from '../../../core/services/form-data.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrl: './form-one.component.scss'
})
export class FormOneComponent {
  notes: string = '';

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
  }

  onSubmit(formData: any) {
    const completeData = {
      ...formData,
      notes: this.notes
    };
    this.formDataService.submitForm(completeData).subscribe({
      next: response => {
        console.log('Form submitted successfully', response)
        this.notes = '';
      },
      error: error => console.error('Error submitting form:', error)
    });
  }

  onNotesChanged(notes: string) {
    this.notes = notes;
  }
}
