import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabelComponent } from './components/label/label.component';
import { TagsComponent } from './components/tags/tags.component';
import { CustomersComponent } from './components/customers/customers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  },
  {
    path: 'label',
    component: LabelComponent
  },
  {
    path: 'tags',
    component: TagsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
