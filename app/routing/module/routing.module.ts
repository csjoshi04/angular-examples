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
import {RouterModule, Routes} from "@angular/router";
import {HashLocationStrategy, Location, LocationStrategy} from "@angular/common";

const appRoutes:Routes = [
    {path:'', component : HomeComponent},
    {path:'gen.routing.index.html', component : HomeComponent},
    {path:'users', component : UsersComponent, children:[
        {path:':id/:name', component : UserComponent},
    ]},
    {path:'servers', component : ServersComponent, children:[
        {path:':id', component : ServerComponent},
        {path:':id/edit', component : EditServerComponent}
    ]},

]

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UsersComponent,
        ServersComponent,
        UserComponent,
        EditServerComponent,
        ServerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [ServersService, Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
