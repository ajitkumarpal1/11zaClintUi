import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptInSettingsComponent } from './components/opt-in-settings/opt-in-settings.component';
import { LogsComponent } from './components/logs/logs.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'opt-in-settings'},
  {path:'opt-in-settings',component:OptInSettingsComponent},
  {path:'logs',component:LogsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
