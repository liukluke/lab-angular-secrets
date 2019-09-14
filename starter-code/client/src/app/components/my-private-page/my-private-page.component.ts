import { Component, OnInit } from '@angular/core';
import { SessionService } from './../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.scss']
})
export class MyPrivatePageComponent implements OnInit {
  user: any;
  error: string;
  privateData: any = '';
  constructor(private session: SessionService, private router: Router) {
   }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe((user: any) => this.successCb(user), (err: any) => this.errorCb(err));
  }

  errorCb(err: any): void {
    this.error = err;
    this.user = null;
    this.router.navigate(['login']);
  }

  successCb(user: any): void {
    this.user = user;
    this.error = null;
    this.getPrivateData();
  }

  getPrivateData(): void {
    this.session.getPrivateData()
      .subscribe(
        (data: any) => this.privateData = data,
        (err: any) => this.error = err
      );
  }

}
