import { Component } from '@angular/core';

require('file?name=[name].[ext]!./app.component.tpl.html');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.tpl.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
}
