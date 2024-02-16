import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: any[] = [];

  constructor() {}

  getDisciplines(): string[] {
    return Array.from(new Set(this.notes.map(note => note.discipline)));
  }

  getTopicsByDiscipline(discipline: string): string[] {
    const disciplineNotes = this.notes.filter(note => note.discipline === discipline);
    return Array.from(new Set(disciplineNotes.map(note => note.topic)));
  }

  getNoteDetails(discipline: string, topic: string): any {
    return this.notes.find(note => note.discipline === discipline && note.topic === topic);
  }

  addNote(newNote: any) {
    this.notes.push(newNote);
  }
}
