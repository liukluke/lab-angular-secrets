import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from './../../services/session.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./../../styles/styles.scss']
})
export class AuthLoginComponent implements OnInit {
  error: string;
  newLoginInput: Object = {
    username: '',
    password: ''
  };
  user: Object;
  constructor(private session: SessionService) { }
  ngOnInit() { }
  login(): void {
    this.session.login(this.newLoginInput)
      .subscribe(
        (user: HttpClient) => {
          this.user = user;
          this.session.isUserLoggedIn.next(true);
          this.newLoginInput = {}
        },
        (err: any) => this.error = err
      );
  }
}
