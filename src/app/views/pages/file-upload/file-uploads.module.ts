import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-uploads-routing.module';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { MediaSetsComponent } from './components/media-sets/media-sets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { ImagePreviewComponent } from '../../partials/image-preview/image-preview.component';
@NgModule({
  declarations: [
    FileUploadComponent,
    MediaSetsComponent,
    ImagePreviewComponent
  ],
  imports: [
    FileUploadRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class FileUploadsModule { }
