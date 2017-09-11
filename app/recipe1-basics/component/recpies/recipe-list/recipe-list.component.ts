import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

require('file?name=[name].[ext]!./recipe-list.component.tpl.html');

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.tpl.html',
})
export class RecipeListComponent {
    recipes:Recipe[] = [
        new Recipe("A Test Recipe","This is simply a test","https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg")
    ];
}
