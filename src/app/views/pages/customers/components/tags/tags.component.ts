import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgSelectComponent } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalService } from '../../../../../core/utilities/modal';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {
  constructor(private modal:ModalService){}

  onAddTag(){
    this.modal.open('add-Tags')
  }
}
