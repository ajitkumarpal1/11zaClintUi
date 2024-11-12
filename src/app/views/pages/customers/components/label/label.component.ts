import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgSelectComponent } from '@ng-select/ng-select';
import {
  NgxPaginationModule,
  PaginationControlsComponent,
} from 'ngx-pagination';
import { ModalService } from '../../../../../core/utilities/modal';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
})
export class LabelComponent {
  constructor(
    private modal:ModalService
  ){}

  onAddLabel(){
    this.modal.open('add-Label')
  }
}
