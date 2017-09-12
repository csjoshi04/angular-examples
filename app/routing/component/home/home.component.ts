import { Component, OnInit } from '@angular/core';
require('file?name=[name].[ext]!./home.component.tpl.html');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.tpl.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
