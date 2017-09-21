import { Component, EventEmitter, Input, Output } from '@angular/core';

require('file?name=[name].[ext]!./account.component.tpl.html');
require('file?name=[name].[ext]!./account.component.css');

@Component({
  selector: 'app-account',
  templateUrl: 'account.component.tpl.html',
  styleUrls: ['account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    console.log('A server status changed, new status: ' + status);
  }
}
