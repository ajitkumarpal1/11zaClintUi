import { Component } from '@angular/core';
import { Doc, Pagination, TagID, Tags, TeamID } from '../../../../../core/models/paginationModel';
import { ModalService } from '../../../../../core/utilities/modal';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  constructor(private modals: ModalService) { }
  cPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;
  teams: any[] = [
    {
      name: 'Team 1',
      members: '10',
      id: 1
    },
    {
      name: 'Team 2',
      members: '20',
      id: 2
    },
    {
      name: 'Team 3',
      members: '30',
      id: 3
    },
    {
      name: 'Team 4',
      members: '40',
      id: 4
    }
  ];

  openEditModel() {
    this.modals.open('editTeamsModal');
  }
}
