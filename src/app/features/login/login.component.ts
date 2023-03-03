import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginResponseData, LoginService } from './login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;
  isLoading = false;
  error: string = null;

  constructor(private loginService: LoginService, private route: Router) {}

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onLogin(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;

    const usernameValue = this.loginForm.get('username').value;
    const passwordValue = this.loginForm.get('password').value;

    let LoginObs: Observable<LoginResponseData>;

    LoginObs = this.loginService.login(usernameValue, passwordValue);

    LoginObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.route.navigate(['/books']);
      },
      (errorMes) => {
        this.error = errorMes;
        this.isLoading = false;

        setTimeout(() => {
          this.error = null;
        }, 3000)
      }
    );
  }
}
