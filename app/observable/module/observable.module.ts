import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from "../component/app.component";
import {HomeComponent} from "../component/home/home.component";
import {UserComponent} from "../component/user/user.component";
import {AppRoutingModule} from "./observable-routing.module";
import {HashLocationStrategy, LocationStrategy, Location} from "@angular/common";
import {UsersService} from "../service/users.service";

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
    providers: [UsersService, Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
