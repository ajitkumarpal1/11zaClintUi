import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { BusinessProfileComponent } from './components/business-profile/business-profile.component';
import { RolesComponent } from './components/roles/roles.component';
import { PermissionComponent } from './components/permission/permission.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full'
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
  },
  {
    path: 'business-profile',
    component: BusinessProfileComponent,
  },
  {
    path: 'team-members',
    loadChildren: () => import('./components/team-members/team-members.module').then(m => m.TeamMembersModule)
  },
  {
    path:'roles',
    component:RolesComponent
  },
  {
    path:'permissions',
    component:PermissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
