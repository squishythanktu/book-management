import { AuthService } from './features/auth/auth.service';
import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'book-management';
  public isAuthenticated: boolean = false;
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

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll(e: Event): void {
    let header = document.querySelector('.header');
    if (window.scrollY > 64) {
      header.classList.add('sticky');
    } else {
      // header.classList.remove('sticky');
    }
  }
}
