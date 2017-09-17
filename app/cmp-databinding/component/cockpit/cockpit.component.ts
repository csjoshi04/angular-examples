import {Component, EventEmitter, Output} from '@angular/core';

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

  onAddServer() {
    this.serverCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    })
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    })
  }
}
