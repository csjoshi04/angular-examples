import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from '../component/app.component';
import {ServerElementComponent} from "../component/server-element/server-element.component";
import {CockpitComponent} from "../component/cockpit/cockpit.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ServerElementComponent,
        CockpitComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
