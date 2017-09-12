import {Component} from '@angular/core';

require('file?name=[name].[ext]!./app.component.tpl.html');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.tpl.html',
    styles: [`
            .container {
            margin-top: 30px;
            }
        `]
})
export class AppComponent {
}
