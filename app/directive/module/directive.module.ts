import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from '../component/app.component';
import {BasicHighlightDirective} from "../directive/basic-highlight/basic-highlight.directive";
import {BetterHighlightDirective} from "../directive/better-highlight/better-highlight.directive";
import {UnlessDirective} from "../directive/unless/unless.directive";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        BasicHighlightDirective,
        BetterHighlightDirective,
        UnlessDirective
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
