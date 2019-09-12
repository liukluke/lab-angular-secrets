import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./../../styles/styles.scss']
})
export class AuthSignupComponent implements OnInit {
  newSignupInput: Object = {
    username: '',
    name: '',
    secret: '',
    password: ''
  };
  constructor() { }
  ngOnInit() { }

  @Output() newSignup: EventEmitter<any> = new EventEmitter();
  signupForm(signup: Object) {
    this.newSignup.emit(signup);
    this.newSignupInput = {};
  }
}
