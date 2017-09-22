import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from "../component/app.component";
import {HomeComponent} from "../component/home/home.component";
import {UserComponent} from "../component/user/user.component";
import {AppRoutingModule} from "./observable-routing.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
