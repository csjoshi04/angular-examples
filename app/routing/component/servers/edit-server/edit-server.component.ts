import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params} from "@angular/router";

require('file?name=[name].[ext]!./edit-server.component.tpl.html');

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.tpl.html'
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.fragment)
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.queryParams.subscribe((params:Params)=>{
      // console.log(params.queryParams)
    })
    /*this.route.fragment.subscribe((params:Params)=>{
      // console.log(params.queryParams)
    })*/
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
