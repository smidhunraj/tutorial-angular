import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[]
})
export class NewAccountComponent {
 // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(private loggingService:LoggingService,private accountsService:AccountService){
this.accountsService.statusupdated.subscribe(
(status:string)=>alert("Status is ....."+status)

);
  }


  onCreateAccount(accountName: string, accountStatus: string) {
  /*  this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });*/
    this.accountsService.addAccount(accountName,accountStatus);
  //  this.loggingService.logStatusChange(accountStatus);
  //  const service=new LoggingService();
   // service.logStatusChange(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  }



}
