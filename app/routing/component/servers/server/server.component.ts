import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Router} from "@angular/router";

require('file?name=[name].[ext]!./server.component.tpl.html');

@Component({
  selector: 'app-server',
  templateUrl: './server.component.tpl.html'
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route:ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.route.snapshot.params["id"]);
    this.route.params.subscribe((params)=>{
      this.server = this.serversService.getServer(+params["id"]);
    })
  }

  onEdit(){
    // this.router.navigate(['/servers',this.server.id,'edit'])
    this.router.navigate(['edit'],{relativeTo:this.route, queryParamsHandling : 'preserve'})
  }

}
