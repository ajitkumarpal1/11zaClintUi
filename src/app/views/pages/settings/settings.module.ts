import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { OptInSettingsComponent } from './components/opt-in-settings/opt-in-settings.component';
import { LogsComponent } from './components/logs/logs.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    OptInSettingsComponent,
    LogsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NgxPaginationModule,
    FormsModule,
    BsDatepickerModule
  ]
})
export class SettingsModule { }
