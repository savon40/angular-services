
import {Injectable} from '@angular/core';

// we dont need a decorator like @Service for services, it is just a class
@Injectable({providedIn: 'root'})
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}