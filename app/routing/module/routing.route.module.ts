import {NgModule} from "@angular/core";
import {UsersComponent} from "../component/users/users.component";
import {HomeComponent} from "../component/home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "../component/users/user/user.component";
import {ServersComponent} from "../component/servers/servers.component";
import {ServerComponent} from "../component/servers/server/server.component";
import {PageNotFoundComponent} from "../component/page-not-found/page-not-found.component";
import {EditServerComponent} from "../component/servers/edit-server/edit-server.component";
import {AuthGuard} from "../service/auth-guard.service";
import {CanDeactivateGuard} from "../component/servers/edit-server/can-deactivate-guard.service";
import {ErrorPageComponent} from "../component/error-page/error-page.component";

const appRoutes:Routes = [
    {path:'', component : HomeComponent},
    {path:'gen.routing.index.html', component : HomeComponent},
    {path:'users', component : UsersComponent, children:[
        {path:':id/:name', component : UserComponent},
    ]},
    {path:'servers',
        // canActivate: [AuthGuard] ,
        canActivateChild: [AuthGuard],
        component : ServersComponent,
        children:[
        {path:':id', component : ServerComponent},
        {path:':id/edit', component : EditServerComponent, canDeactivate: [CanDeactivateGuard]}
    ]},
    // {path:'not-found', component : PageNotFoundComponent},
    {path:'not-found', component : ErrorPageComponent, data:{message: 'Page not found!'}},
    {path:'**', redirectTo: '/not-found'}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}