import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean = false;
  @Input() showModal: boolean = false;
  @Output() showModalChange = new EventEmitter<boolean>();
  private userSub: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
    });
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  public onLogout(): void {
    this.authService.logout();
  }

  public onClick(): void {
    this.showModalChange.emit(!this.showModal);
  }
}
