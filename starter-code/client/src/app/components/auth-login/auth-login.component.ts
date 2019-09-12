import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./../../styles/styles.scss']
})
export class AuthLoginComponent implements OnInit {
  newLoginInput: Object = {
    username: '',
    password: ''
  };
  constructor() { }
  ngOnInit() { }

  @Output() newLogin: EventEmitter<any> = new EventEmitter();
  submitForm(login: Object) {
    this.newLogin.emit(login);
    this.newLoginInput = {};
  }
}
