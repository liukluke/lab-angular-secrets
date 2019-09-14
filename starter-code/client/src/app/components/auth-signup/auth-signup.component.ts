import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from './../../services/session.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./../../styles/styles.scss'],
})
export class AuthSignupComponent implements OnInit {
  error: string;
  newSignupInput: Object = {
    username: '',
    name: '',
    secret: '',
    password: ''
  };
  user: any;
  constructor(private session: SessionService,private router: Router) { }
  ngOnInit(): void { }
  signup(): void {
    this.session.signup(this.newSignupInput)
      .subscribe(() => {
        this.login();
        this.newSignupInput = {}
      },
        (err: any) => this.error = err
      );
  }
  login(): void {
    const newUser = { username: this.newSignupInput['username'], password: this.newSignupInput['password'] }
    this.session.login(newUser)
      .subscribe(
        (user: HttpClient) => {
          this.user = user;
          this.session.isUserLoggedIn.next(true);
          this.router.navigate(['private']);
        },
        (err: any) => this.error = err
      );
  }
}

