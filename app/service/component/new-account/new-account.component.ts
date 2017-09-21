import { Component, EventEmitter, Output } from '@angular/core';

require('file?name=[name].[ext]!./new-account.component.tpl.html');
require('file?name=[name].[ext]!./new-account.component.css');

@Component({
  selector: 'app-new-account',
  templateUrl: 'new-account.component.tpl.html',
  styleUrls: ['new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
