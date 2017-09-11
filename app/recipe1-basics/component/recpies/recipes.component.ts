import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";

require('file?name=[name].[ext]!./recipes.component.tpl.html');

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.tpl.html',
})
export class RecipesComponent implements OnInit{

    constructor(){

    }

    ngOnInit(): void {
    }
}
