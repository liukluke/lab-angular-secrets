import { Component, OnInit } from '@angular/core';
import { SessionService } from './../../services/session.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  constructor(private session: SessionService, private router: Router) { }
  ngOnInit() { }
  login(): void {
    this.session.login(this.newLoginInput)
      .subscribe(
        (user: HttpClient) => {
          this.user = user;
          this.session.isUserLoggedIn.next(true);
          this.newLoginInput = {};
          this.router.navigate(['private']);
        },
        (err: any) => this.error = err
      );
  }
}
