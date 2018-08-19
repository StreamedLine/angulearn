import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note: Note;

  getNote(): void {
  	this.route.params.subscribe(
  		params => {
  			let id = +params['id'];
        if (id) {
    			this.noteService.getNote(id)
    				.subscribe(note => this.note = note);
        } else {
          this.note = {id: 0, title: 'Title (edit me)', text: ''}
        }
  		}
  	)
  }

  constructor(
  	private noteService: NoteService,
  	private route: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.getNote();
  }

}
