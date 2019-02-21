import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';
import { AccountsService } from 'src/app/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] //put services here
  /*
    we removed AccountsService from the provider array because it is already provided
    in the parent component (app.component.ts) and we want to use the same instance of it across all
    components - this way all of the components are referencing the same account array
  */ 
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  //this is the right way to tell angular that we need instance of loggingservice
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    //THIS IS REPLACED BY SERVICE
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);

    //service call --> we SHOULD NOT do it this way
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
  }
}
