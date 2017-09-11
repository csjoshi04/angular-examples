import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from '../component/app.component';
import {HeaderComponent} from "../component/header/header.component";
import {RecipesComponent} from "../component/recpies/recipes.component";
import {RecipeDetailComponent} from "../component/recpies/recipe-detail/recipe-detail.component";
import {RecipeListComponent} from "../component/recpies/recipe-list/recipe-list.component";
import {RecipeItemComponent} from "../component/recpies/recipe-list/recipe-item/recipe-item.component";
import {ShoppingListComponent} from "../component/shopping-list/shopping-list.component";
import {ShoppingEditComponent} from "../component/shopping-list/shopping-edit/shopping-edit.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        RecipesComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        RecipeItemComponent,
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
