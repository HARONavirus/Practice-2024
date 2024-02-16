import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../../upload/note.service';

@Component({
  selector: 'app-note-details',
  templateUrl: 'note-details.page.html',
  styleUrls: ['note-details.page.scss']
})
export class NoteDetailsPage {
  discipline: string;
  topic: string;
  note: any;

  constructor(private route: ActivatedRoute, private router: Router, private noteService: NoteService) {}

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.discipline = params['discipline'];
      this.topic = params['topic'];
      this.note = this.getNoteDetails(this.discipline, this.topic);
    });
  }

  getNoteDetails(discipline: string, topic: string): any {
    return this.noteService.getNoteDetails(discipline, topic);
  }

  openSummary(summaryUrl: string) {
    window.open(summaryUrl, '_blank');
  }
}
