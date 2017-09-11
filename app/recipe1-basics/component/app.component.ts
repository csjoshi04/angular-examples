import { Component } from '@angular/core';

require('file?name=[name].[ext]!./app.component.tpl.html');

@Component({
    selector: 'shopping-app',
    templateUrl: './app.component.tpl.html',
})
export class AppComponent {
}
