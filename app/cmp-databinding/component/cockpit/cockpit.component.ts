import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

require('file?name=[name].[ext]!./cockpit.component.tpl.html');

@Component({
  selector: 'app-cockpit',
  templateUrl: 'cockpit.component.tpl.html',
  styles : [`p {
      color: blue;
  }`]
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild("serverContentInput") serverContentInput:ElementRef;

  onAddServer(serverNameInput:HTMLInputElement) {
    this.serverCreated.emit({
      // serverName:this.newServerName,
      serverName:serverNameInput.value,
      // serverContent:this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(serverNameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName:this.newServerName,
      serverName:serverNameInput.value,
      // serverContent:this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
