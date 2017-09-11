import { Component } from '@angular/core';

require('file?name=[name].[ext]!./recipe-item.component.tpl.html');

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.tpl.html',
})
export class RecipeItemComponent {
}
