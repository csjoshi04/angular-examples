import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "../component/app.component";
import {HomeComponent} from "../component/home/home.component";
import {UsersComponent} from "../component/users/users.component";
import {ServersComponent} from "../component/servers/servers.component";
import {UserComponent} from "../component/users/user/user.component";
import {EditServerComponent} from "../component/servers/edit-server/edit-server.component";
import {ServerComponent} from "../component/servers/server/server.component";
import {ServersService} from "../component/servers/servers.service";
import {HashLocationStrategy, Location, LocationStrategy} from "@angular/common";
import {PageNotFoundComponent} from "../component/page-not-found/page-not-found.component";
import {AppRoutingModule} from "./routing.route.module";
import {AuthGuard} from "../service/auth-guard.service";
import {AuthService} from "../service/auth.service";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UsersComponent,
        ServersComponent,
        UserComponent,
        EditServerComponent,
        ServerComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [ AuthGuard, AuthService, ServersService, Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
