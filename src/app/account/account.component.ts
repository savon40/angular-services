import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';
import { AccountsService } from 'src/app/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService] - removed because it is in app.module.ts
  /*
    we removed AccountsService from the provider array because it is already provided
    in the parent component (app.component.ts) and we want to use the same instance of it across all
    components - this way all of the components are referencing the same account array
  */ 
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService : LoggingService, private accountsService: AccountsService) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);

    this.accountsService.statusUpdated.emit(status);
  }
}
