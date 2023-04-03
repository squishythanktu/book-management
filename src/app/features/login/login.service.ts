import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from 'src/app/core/models/user.model';

export interface LoginResponseData {
  token: string;
  user: User;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private route: Router) {}

  login(username: string, password: string) {
    return this.http
      .post<LoginResponseData>('https://book-api.novahub.vn/api/v1/auths/login', {
        username: username,
        password: password,
      })
      .pipe(
        catchError(this.handleError),           
        tap((resData) => {
          console.log("resData: " + resData.token);
          this.handleAuthentication(resData.token, resData.user);
        })
      );
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Username or password is incorrect!';
    return throwError(errorMessage);
  }

  handleAuthentication(token: string, user: User) {
    const curUser = new User(user.id, user.name, user.username, user.role);
    console.log(curUser);
    
    this.user.next(curUser);
  }
}
