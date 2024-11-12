import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { AssignCustomersComponent } from './components/assign-customers/assign-customers.component';

const routes: Routes = [
  {
    path: '',
    component: TeamMembersComponent
  }, {
    path: 'assign-customers',
    component: AssignCustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamMembersRoutingModule { }
