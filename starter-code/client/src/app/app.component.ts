import { Component, Input } from '@angular/core';
import { SessionService } from './services/session.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/styles.scss'],
  providers: [SessionService]
})
export class AppComponent {
  user: any;
  error: string;
  privateData: any = '';
  view: string = 'login'; 

  constructor(private session: SessionService) { }
  ngOnInit(): void {
    this.session.isLoggedIn()
      .subscribe((user: any) => { this.successCb(user) });
  }

  selectView(viewAttr: string){
    this.view = viewAttr;
    console.log(this.view)
  }

  submitForm(login: Object) {
    console.log(login)
    // this.session.login(login)
    //   .subscribe(
    //     (user: HttpClient) => this.successCb(user),
    //     (err: any) => this.errorCb(err)
    //   );
  }

  signupForm(signup: Object) {
    console.log(signup)
    // this.session.signup(signup)
    //   .subscribe(
    //     (user: HttpClient) => this.successCb(user),
    //     (err: any) => this.errorCb(err)
    //   );
  }

  logout(): void {
    this.session.logout()
      .subscribe(
        () => this.successCb(null),
        (err: any) => this.errorCb(err)
      );
  }

  getPrivateData(): void {
    this.session.getPrivateData()
      .subscribe(
        (data: any) => this.privateData = data,
        (err: any) => this.error = err
      );
  }

  errorCb(err: any): void {
    this.error = err;
    this.user = null;
  }

  successCb(user: any): void {
    this.user = user;
    this.error = null;
  }

}
