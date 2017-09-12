import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

require('file?name=[name].[ext]!./server.component.tpl.html');

@Component({
  selector: 'app-server',
  templateUrl: './server.component.tpl.html'
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

}
