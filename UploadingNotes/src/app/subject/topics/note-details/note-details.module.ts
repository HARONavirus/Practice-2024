import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteDetailsPage } from './note-details.page';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';

@NgModule({
    imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      ExploreContainerComponentModule,
      RouterModule.forChild([{ path: '', component: NoteDetailsPage }])
    ],
    declarations: [NoteDetailsPage]
  })
  export class NoteDetailsPageModule {}
