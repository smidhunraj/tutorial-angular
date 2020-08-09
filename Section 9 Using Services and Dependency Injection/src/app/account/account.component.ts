import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService:LoggingService,private accountsService:AccountService){

  }

  onSetTo(status: string) {

   // this.statusChanged.emit({id: this.id, newStatus: status});
   this.accountsService.updateStatus(this.id,status);
  //  this.loggingService.logStatusChange(status);
  this.accountsService.statusupdated.emit(status);
  }
}
