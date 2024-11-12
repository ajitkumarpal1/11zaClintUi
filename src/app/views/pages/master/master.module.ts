import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';
import { TeamsComponent } from './components/teams/teams.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { BusinessProfileComponent } from './components/business-profile/business-profile.component';
import { PermissionComponent } from './components/permission/permission.component';
import { RolesComponent } from './components/roles/roles.component';


@NgModule({
  declarations: [
    TeamsComponent,
    MyProfileComponent,
    BusinessProfileComponent,
    PermissionComponent,
    RolesComponent
  ],
  imports: [
    NgxPaginationModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
