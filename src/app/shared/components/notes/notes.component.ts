import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  @Input() initialNotes: string = '';
  @Output() notesChanged = new EventEmitter<string>();

  notesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.notesForm = this.fb.group({
      notes: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.notesForm.patchValue({ notes: this.initialNotes });
  }
  onNotesChange() {
    this.notesChanged.emit(this.notesForm.get('notes')?.value);
  }
}
