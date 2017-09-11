import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppComponent} from "../component/app.component";
import {ServerComponent} from "../component/server/server.component";
import {ServersComponent} from "../component/servers/servers.component";


@NgModule({
    declarations: [
        AppComponent,
        ServerComponent,
        ServersComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
