import { Component, OnInit } from '@angular/core';

require('file?name=[name].[ext]!./home.component.tpl.html');
require('file?name=[name].[ext]!./home.component.css');

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.tpl.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
