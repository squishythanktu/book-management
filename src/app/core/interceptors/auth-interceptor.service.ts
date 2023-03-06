import { AuthService } from './../../features/auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { exhaustMap, take } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authService.user.pipe(take(1), exhaustMap(user => {
            if(!user) {
                return next.handle(req);
            }
            else {
                const modifiedRequest = req.clone({
                    params: new HttpParams().set('auth', user.token)
                })
                return next.handle(modifiedRequest);
            }
        }))
    }
}