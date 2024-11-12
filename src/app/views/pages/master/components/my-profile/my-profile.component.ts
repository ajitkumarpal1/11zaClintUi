import { Component } from '@angular/core';
import { ActiveTeams } from './my-profile.models';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {
  teams: ActiveTeams[] = [
    {
      "_id": "63fdf8bb668ca7fc828de486",
      "name": "Marketing",
      "status": true,
      "createdAt": 1677588667280,
      "createdBy": "63e9daef874b39bb67cee0dc",
      "updatedAt": 1693475905527,
      "updatedBy": "62cc2b48698e2e3da4110bde",
      "parentId": null,
      "__v": 0,
      "color": "#086600"
    },
    {
      "_id": "63fdfc9d668ca7fc828de7b7",
      "name": "sssss",
      "status": true,
      "createdAt": 1677589661177,
      "createdBy": "63e9daef874b39bb67cee0dc",
      "updatedAt": 1703756105367,
      "updatedBy": "62cbf826bc4206142616b879",
      "parentId": null,
      "__v": 0,
      "color": "#FF5722"
    },
    {
      "_id": "64f02f84066a28d0327619b6",
      "name": "hellop",
      "status": true,
      "color": "#2196f3",
      "createdAt": 1693462404395,
      "createdBy": "62cc2b48698e2e3da4110bde",
      "updatedAt": 1693462404395,
      "updatedBy": "62cc2b48698e2e3da4110bde",
      "parentId": null,
      "__v": 0
    },
    {
      "_id": "62ac22d7c2f7b29a1bb05019",
      "name": "Default - All Member",
      "status": true,
      "createdAt": 1655448279184,
      "createdBy": null,
      "updatedAt": 1706856857644,
      "updatedBy": "64d0c7dfdfaf257d0a242bb2",
      "parentId": null,
      "__v": 0,
      "color": "#2196f3"
    },
    {
      "_id": "64f0548a066a28d0327639f2",
      "name": "hello_11za",
      "status": true,
      "color": "#9d22db",
      "createdAt": 1693471882456,
      "createdBy": "62cc2b48698e2e3da4110bde",
      "updatedAt": 1712642890290,
      "updatedBy": "6603a4583ca78f36848c88f8",
      "parentId": null,
      "__v": 0
    },
    {
      "_id": "63fdfc51668ca7fc828de78d",
      "name": "test",
      "status": true,
      "createdAt": 1677589585390,
      "createdBy": "63e9daef874b39bb67cee0dc",
      "updatedAt": 1684747458536,
      "updatedBy": "63aadb52d865763bf82e7d48",
      "parentId": null,
      "__v": 0,
      "color": "#494068"
    },
    {
      "_id": "66840d0c2eaf1dbfdc6a07b0",
      "name": "Angular Dev",
      "status": true,
      "color": "#2196f3",
      "createdAt": 1719930124473,
      "createdBy": "668402402eaf1dbfdc69b62e",
      "updatedAt": 1719930124473,
      "updatedBy": "668402402eaf1dbfdc69b62e",
      "parentId": null,
      "__v": 0
    }
  ]

  selectedTeams: string[] = [];
  selectAll() {
    this.selectedTeams = this.teams.map((x) => x._id || '');
  }

  unselectAll() {
    this.selectedTeams = [];
  }

}
