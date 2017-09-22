import {Component} from "@angular/core";
import {LoggingService} from "../../service/logging.service";
import {AccountService} from "../../service/accountdata.service";

require('file?name=[name].[ext]!./new-account.component.tpl.html');
require('file?name=[name].[ext]!./new-account.component.css');

@Component({
  selector: 'app-new-account',
  templateUrl: 'new-account.component.tpl.html',
  styleUrls: ['new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService:LoggingService, private accountService: AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
