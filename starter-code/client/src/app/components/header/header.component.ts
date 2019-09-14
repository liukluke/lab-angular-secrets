import { Component, OnInit } from '@angular/core';
import { SessionService } from './../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./../../styles/styles.scss']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean;
  constructor(private session: SessionService) {
    this.session.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
  }
  ngOnInit(): void { }
  logout(): void {
    this.session.logout()
      .subscribe(() => {
        this.isUserLoggedIn = !this.isUserLoggedIn;
      })
  }
}
