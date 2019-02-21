import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from 'src/app/accounts.service';
import { LoggingService } from 'src/app/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // providers: [AccountsService, LoggingService], 
  //moving this service here we are saying every component in the app has access to this
  //every component will also have access to the same instance of AccountsService
  bootstrap: [AppComponent]
})
export class AppModule { }
