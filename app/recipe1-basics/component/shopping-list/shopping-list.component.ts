import { Component } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

require('file?name=[name].[ext]!./shopping-list.component.tpl.html');

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.tpl.html',
})
export class ShoppingListComponent {

    ingredients:Ingredient[] = [
        new Ingredient("Apples",5),
        new Ingredient("Tomatoes",10)
    ]
}
