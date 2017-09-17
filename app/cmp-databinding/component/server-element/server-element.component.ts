import {Component, Input, OnInit} from '@angular/core';

require('file?name=[name].[ext]!./server-element.component.tpl.html');

@Component({
  selector: 'app-server-element',
  templateUrl: 'server-element.component.tpl.html',
})
export class ServerElementComponent implements OnInit{

  @Input("srvElement") element:{type:string, name:string, content:string};

  constructor(){}

  ngOnInit(): void {

  }
}
