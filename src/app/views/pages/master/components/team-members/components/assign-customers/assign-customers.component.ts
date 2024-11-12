import { Component } from '@angular/core';

@Component({
  selector: 'app-assign-customers',
  templateUrl: './assign-customers.component.html',
  styleUrl: './assign-customers.component.scss'
})
export class AssignCustomersComponent {
  teamMemberDocs: any = { docs: [] };
}
