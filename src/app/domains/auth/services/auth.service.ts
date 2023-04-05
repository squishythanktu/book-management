import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from 'src/app/core/models/user.model';
import { environment } from 'src/environments/environment';

export interface LoginResponseData {
  token: string;
  user: User; //id name username role
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  apiUrl = environment.apiUrl;
  user = new BehaviorSubject<User | null>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private route: Router) {}

  login(username: string, password: string) {
    return this.http
      .post<LoginResponseData>(`${this.apiUrl}/auths/login`, {
        username: username,
        password: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(resData.token, resData.user);
        })
      );
  }

  autoLogin() {
    const userData: {
      id: number;
      name: string;
      username: string;
      role: string;
      _token: string;
    } = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    } else {
      const loadedUser = new User(
        userData.id,
        userData.name,
        userData.username,
        userData.role,
        userData._token
      );

      if (loadedUser.token) {
        console.log('Có sẳn token');

        this.user.next(loadedUser);
        // Đếm ngược thời gian còn lại (originDuration - now) và tự động đăng xuất khi đếm ngược đến 0
        const remainingExpirationDuration =
          loadedUser.tokenExpirationDate.getTime() - new Date().getTime();
        this.autoLogout(remainingExpirationDuration);
      }
    }
  }

  logout() {
    this.user.next(null);
    this.route.navigate(['/auth']);
    localStorage.removeItem('userData');

    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
  }
  autoLogout(remainingExpirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, remainingExpirationDuration);
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Username or password is incorrect!';
    return throwError(errorMessage);
  }

  private handleAuthentication(token: string, user: User) {
    const curUser = new User(
      user.id,
      user.name,
      user.username,
      user.role,
      token
    );
    this.user.next(curUser);

    localStorage.setItem('userData', JSON.stringify(curUser));

    localStorage.setItem('userData', JSON.stringify(curUser));

    const expiresIn =
      (curUser.tokenExpirationDate.getTime() - new Date().getTime()) / 1000;
    this.autoLogout(expiresIn);
  }
}
