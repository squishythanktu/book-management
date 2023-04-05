import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './domains/auth/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'book-management';
  public isAuthenticated: boolean = false;
  public appShowModal: boolean = false;
  private userSub: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
