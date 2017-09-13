import {Component} from '@angular/core';

require('file?name=[name].[ext]!./page-not-found.component.tpl.html');

@Component({
    selector: 'page-not-found',
    templateUrl: './page-not-found.component.tpl.html'
})
export class PageNotFoundComponent {
}
