import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { TagsComponent } from './components/tags/tags.component';
import { LabelComponent } from './components/label/label.component';


@NgModule({
  declarations: [
    TagsComponent,
    LabelComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgSelectModule,
    NgxPaginationModule,
    RouterModule
  ]
})
export class CustomersModule { }
 