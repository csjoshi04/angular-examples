import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {ActivatedRoute, Router} from "@angular/router";

require('file?name=[name].[ext]!./servers.component.tpl.html');

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.tpl.html',
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    this.router.navigate(['servers'], {relativeTo:this.route})
  }

}
