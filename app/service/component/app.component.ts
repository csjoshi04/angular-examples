import {Component, OnInit} from '@angular/core';
import {AccountService} from "../service/accountdata.service";

require('file?name=[name].[ext]!./app.component.tpl.html');
require('file?name=[name].[ext]!./app.component.css');

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.tpl.html',
  styleUrls: ['app.component.css'],
  // providers:[AccountService]
})
export class AppComponent implements OnInit{

  accounts:{name:string,status:string}[] = [];

  constructor(private accountService:AccountService){}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
