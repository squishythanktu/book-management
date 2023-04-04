import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { exhaustMap, take } from 'rxjs';
import { AuthService } from 'src/app/domains/auth/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        } else {
          const modifiedRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${user.token}`),
          });
          return next.handle(modifiedRequest);
        }
      })
    );
  }
}
