import { Component } from '@angular/core';

require('file?name=[name].[ext]!./recipe-detail.component.tpl.html');

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.tpl.html',
})
export class RecipeDetailComponent {
}
