import { AuthService } from './features/auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-management';
  isAuthenticated = false;
  private userSub: Subscription;
  
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    })
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
