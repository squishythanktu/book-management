import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  public hide = true;
  public isLoading = false;
  public error: string = null;

  constructor(private authService: AuthService, private route: Router) {}

  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  public onLogin(form: FormGroup): void {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;

    const usernameValue = this.loginForm.get('username').value;
    const passwordValue = this.loginForm.get('password').value;

    let loginObs$: Observable<LoginResponseData>;

    loginObs$ = this.authService.login(usernameValue, passwordValue);

    loginObs$.subscribe(
      (resData) => {
        this.isLoading = false;
        this.route.navigate(['/books']);
      },
      (errorMes) => {
        this.error = errorMes;
        this.isLoading = false;

        setTimeout(() => {
          this.error = null;
        }, 3000);
      }
    );

    form.reset();
  }
}
