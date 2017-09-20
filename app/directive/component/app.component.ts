import { Component } from '@angular/core';

require('file?name=[name].[ext]!./app.component.tpl.html');
require('file?name=[name].[ext]!./app.component.css');

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.tpl.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
}
