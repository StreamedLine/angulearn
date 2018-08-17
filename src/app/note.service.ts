import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Note } from './note';
import { NOTES } from './mock-notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  note: Note;

  getNotes(): Observable<Note[]> {
  	return of(NOTES)
  }

  getNote(id: number): Observable<Note> {
    return of(NOTES.find(note => note.id === id));
  }

  constructor(
  	private route: ActivatedRoute,
   ) { }
}