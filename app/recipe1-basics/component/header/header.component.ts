import { Component } from '@angular/core';

require('file?name=[name].[ext]!./header.component.tpl.html');

@Component({
    selector: 'app-header',
    templateUrl: './header.component.tpl.html',
})
export class HeaderComponent {
}
