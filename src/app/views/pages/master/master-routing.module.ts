import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { BusinessProfileComponent } from './components/business-profile/business-profile.component';
import { RolesComponent } from './components/roles/roles.component';
import { PermissionComponent } from './components/permission/permission.component';
import { QueuechatsComponent } from './components/queuechats/queuechats.component';
import { QueueChatsFirstChildComponent } from './components/queue-chats-first-child/queue-chats-first-child.component';
import { ChatsAssignmentComponent } from './components/chats-assignment/chats-assignment.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full'
  },
  {
    path: 'queuechats',
    component: QueuechatsComponent,
    children: [
      {
        path: '',
        redirectTo: 'q-chate',
        pathMatch: 'full'
      },
      {
        path: 'q-chate',
        component: QueueChatsFirstChildComponent
      },
      {
        path: 'chats-assignment',
        component: ChatsAssignmentComponent
      }
    ]
  }
  ,
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
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'permissions',
    component: PermissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
