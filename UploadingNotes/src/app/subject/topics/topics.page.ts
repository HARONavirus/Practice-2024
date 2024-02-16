import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../upload/note.service';

@Component({
  selector: 'app-topics',
  templateUrl: 'topics.page.html',
  styleUrls: ['topics.page.scss']
})
export class TopicsPage implements OnInit {
  discipline: string;
  topics: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private noteService: NoteService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.discipline = params['discipline'];
      this.topics = this.getTopics(this.discipline);
    });
  }

  getTopics(discipline: string): string[] {
    return this.noteService.getTopicsByDiscipline(discipline);
  }

  showNoteDetails(topic: string) {
    this.router.navigate(['/tabs/note-details'], {
      queryParams: {
        discipline: this.discipline,
        topic: topic
      }
    });
  }
}
