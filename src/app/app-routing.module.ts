import { NgModule } from '@angular/core';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoteComponent } from './note/note.component';

const routes: Routes = [
	{path: '', redirectTo: '/notes/0', pathMatch: 'full'}
	{path: 'notes/:id', component: NoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
