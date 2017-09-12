import { Component } from '@angular/core';

require('file?name=[name].[ext]!./users.component.tpl.html');

@Component({
  selector: 'app-users',
  templateUrl: './users.component.tpl.html'
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
}
