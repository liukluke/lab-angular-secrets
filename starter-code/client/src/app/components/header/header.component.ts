import { Component, OnInit } from '@angular/core';
import { SessionService } from './../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./../../styles/styles.scss']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean;
  constructor(private session: SessionService, private router: Router) {
    this.session.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
  }
  ngOnInit(): void {
    this.session.isLoggedIn()
    .subscribe(() => this.isUserLoggedIn = true)
   }
  logout(): void {
    this.session.logout()
      .subscribe(() => {
        this.isUserLoggedIn = !this.isUserLoggedIn;
        this.router.navigate(['login']);
      })
  }
}
