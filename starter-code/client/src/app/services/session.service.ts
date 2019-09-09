import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  handleError(e: any): Observable<never> {
    return throwError(e.message);
  }

  signup(user: any): Observable<HttpClient> {
    return this.httpClient.post(`/signup`, user)
      .pipe(
        map((data: any) => data),
        catchError(this.handleError)
      );
  }

  login(user: any) {
    return this.httpClient.post(`/login`, user)
      .pipe(
        map((data: any) => data),
        catchError(this.handleError)
      );
  }

  logout(): Observable<HttpClient> {
    return this.httpClient.post(`/logout`, {})
      .pipe(
        map((data: any) => data),
        catchError(this.handleError)
      );
  }

  isLoggedIn(): Observable<any> {
    return this.httpClient.get(`/loggedin`)
      .pipe(
        map((data: any) => data),
        catchError(this.handleError)
      );
  }

}
