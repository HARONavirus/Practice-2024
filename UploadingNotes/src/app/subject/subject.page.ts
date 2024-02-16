import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NoteService } from '../upload/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'subject.page.html',
  styleUrls: ['subject.page.scss']
})
export class SubjectPage {
  disciplines: string[] = [];

  constructor(private navCtrl: NavController, private noteService: NoteService, private router: Router) {}

  ionViewWillEnter() {
    this.disciplines = this.getDisciplines();
  }

  getDisciplines(): string[] {
    return this.noteService.getDisciplines();
  }

  showTopics(discipline: string) {
    this.router.navigate(['/tabs/topics'], {
      queryParams: {
        discipline: discipline
      }
    });
  }
}
