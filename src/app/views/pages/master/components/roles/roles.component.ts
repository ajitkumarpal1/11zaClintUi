import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalService } from '../../../../../core/utilities/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
  constructor(
    private modal:ModalService
  ){}
  page = [
    '10 per page',
    '25 per page',
    '50 per page',
    '100 per page',
    '200 per page',
  ];

  onaddRoles(){
    this.modal.open('add-roles')
  }
}
