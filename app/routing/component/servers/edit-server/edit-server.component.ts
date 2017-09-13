import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CanComponentDeactivate} from "./can-deactivate-guard.service";
import {Observable} from "rxjs/Observable";

require('file?name=[name].[ext]!./edit-server.component.tpl.html');

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.tpl.html'
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit:boolean =false;
  changesSaved = false;

  constructor(private serversService: ServersService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.fragment)

    this.route.queryParams.subscribe((params:Params)=>{
      this.allowEdit = params['allowEdit'] === '1' ? true:false;
    })
    this.route.fragment.subscribe()
    console.log(this.route.snapshot.params['id'])
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    /*this.route.fragment.subscribe((params:Params)=>{
      // console.log(params.queryParams)
    })*/
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo:this.route})
  }

  canDeactivate():Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowEdit){
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status)){
      return confirm('Do you want to discard the changes?');
    }else{
      return true;
    }
  }

}
