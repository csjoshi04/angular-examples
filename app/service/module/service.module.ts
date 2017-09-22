import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from '../component/app.component';
import {NewAccountComponent} from "../component/new-account/new-account.component";
import {AccountComponent} from "../component/account/account.component";
import {AccountService} from "../service/accountdata.service";
import {LoggingService} from "../service/logging.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        NewAccountComponent,
        AccountComponent
    ],
    providers:[AccountService, LoggingService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
