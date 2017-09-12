import { Component, OnInit } from '@angular/core';

require('file?name=[name].[ext]!./user.component.tpl.html');

@Component({
  selector: 'app-user',
  templateUrl: './user.component.tpl.html'
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor() { }

  ngOnInit() {
  }

}
