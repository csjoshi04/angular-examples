import {Component, Input} from "@angular/core";
import {LoggingService} from "../../service/logging.service";
import {AccountService} from "../../service/accountdata.service";

require('file?name=[name].[ext]!./account.component.tpl.html');
require('file?name=[name].[ext]!./account.component.css');

@Component({
  selector: 'app-account',
  templateUrl: 'account.component.tpl.html',
  styleUrls: ['account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService:LoggingService, private accountService:AccountService){
    this.accountService.statusUpdated.subscribe((status:string)=>{
      alert("new status = "+status);
    })
  }


  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status)
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }
}
