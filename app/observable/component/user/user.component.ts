import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

require('file?name=[name].[ext]!./user.component.tpl.html');
require('file?name=[name].[ext]!./user.component.css');

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.tpl.html',
  styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

}
