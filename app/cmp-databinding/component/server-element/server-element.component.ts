import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit} from "@angular/core";

require('file?name=[name].[ext]!./server-element.component.tpl.html');

@Component({
  selector: 'app-server-element',
  templateUrl: 'server-element.component.tpl.html',
})
export class ServerElementComponent implements OnInit, AfterContentInit{

  @Input("srvElement") element:{type:string, name:string, content:string};
  @ContentChild("serverContentParagraph") serverContentParagraph:ElementRef;

  constructor(){}

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    console.log(this.serverContentParagraph.nativeElement.textContent)
  }
}
