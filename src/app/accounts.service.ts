import {LoggingService} from './logging.service';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

//can use this {providedIn: 'root'} instead of putting it in the app.module.ts providers array
@Injectable({providedIn: 'root'}) //this tells angular that somehting can be injected into this service
//only put this in the RECIEVING service, not the one being injected.
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    //here we are injecting another service into this service
    constructor(private loggingService: LoggingService) {}

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }
    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}