import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from 'src/app/domains/auth/services/auth.service';

@Injectable({ providedIn: 'root' })
export class BookGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1),
      map((user) => {
        const isAuth = !!user;
        if (isAuth) {
          this.route.navigate(['/books']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
