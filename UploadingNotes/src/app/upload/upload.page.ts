import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NoteService } from './note.service';

@Component({
  selector: 'app-upload',
  templateUrl: 'upload.page.html',
  styleUrls: ['upload.page.scss']
})
export class UploadPage {
  discipline: string;
  teacher: string;
  topic: string;
  noteUrl: string;
  summary: string;

  constructor(private navCtrl: NavController, private noteService: NoteService) {}

  uploadFile() {
      const newNote = {
      discipline: this.discipline,
      teacher: this.teacher,
      topic: this.topic,
      url: this.noteUrl,
    };
    this.noteService.addNote(newNote);
  }
}
