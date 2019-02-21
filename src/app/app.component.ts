import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountsService] not needed here because it is moved to app.module.ts
})
export class AppComponent implements OnInit {
  
  accounts: {name: string, status: string}[] = [];
  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
