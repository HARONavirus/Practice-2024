import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'subject',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../subject/subject.module').then(m => m.SubjectPageModule)
          }
        ]
      },
      {
        path: 'upload',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../upload/upload.module').then(m => m.UploadPageModule)
          }
        ]
      },
      {
        path: 'topics',
        loadChildren: () => import('../subject/topics/topics.module').then(m => m.TopicsPageModule),
      },
      {
        path: 'note-details',
        loadChildren: () => import('../subject/topics/note-details/note-details.module').then(m => m.NoteDetailsPageModule),
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/subject',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
