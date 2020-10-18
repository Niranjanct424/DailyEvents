import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../service/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private account: AccountService) { }

  ngOnInit(): void {
  }

  login(role: string) {
    this.account.login(role);
  }

  logout() {
    this.account.logout();
  }

  isLoggedIn(): boolean {
    return this.account.isAuthenticated();
  }

}