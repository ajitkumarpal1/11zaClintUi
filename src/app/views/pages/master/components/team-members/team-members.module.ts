import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamMembersRoutingModule } from './team-members-routing.module';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { AssignCustomersComponent } from './components/assign-customers/assign-customers.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeamMembersComponent,
    AssignCustomersComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    TeamMembersRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeamMembersModule { }
