import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { MediaSetsComponent } from './components/media-sets/media-sets.component';

const routes: Routes = [
  {
    path: '',
    component: FileUploadComponent
  },
  {
    path: 'media-sets',
    component: MediaSetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadRoutingModule { }
