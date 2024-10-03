import { Component, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  @Input() notes: string = '';
  @Input() resetTrigger: number = 0;
  @Output() notesChanged = new EventEmitter<string>();

  notesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.notesForm = this.fb.group({
      notes: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['notes']) {
      this.notesForm.patchValue({ notes: this.notes });
    }
    if (changes['resetTrigger'] && !changes['resetTrigger'].firstChange) {
      this.notesForm.patchValue({ notes: '' });
    }
  }

  onNotesChange() {
    this.notesChanged.emit(this.notesForm.get('notes')?.value);
  }

}
