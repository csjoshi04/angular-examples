import { Component } from '@angular/core';

require('file?name=[name].[ext]!./shopping-edit.component.tpl.html');

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.tpl.html',
})
export class ShoppingEditComponent {
}
