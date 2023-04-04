import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupService, SignupResponseData } from './services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  public hide = true;
  public isLoading = false;
  public signupSuccess: string = null;
  public error: string = null;

  constructor(private signupService: SignupService, private route: Router) {}

  public signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  public onSignup(form: FormGroup): void {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    const nameValue = this.signupForm.get('name').value;
    const usernameValue = this.signupForm.get('username').value;
    const passwordValue = this.signupForm.get('password').value;

    let authObs: Observable<SignupResponseData | { message: string }>;
    authObs = this.signupService.signup(
      nameValue,
      usernameValue,
      passwordValue
    );

    authObs.subscribe((resData) => {
      if (resData.hasOwnProperty('message')) {
        this.error = (resData as { message: string }).message;
      } else {
        this.signupSuccess = 'Sign up successfully!';
        setTimeout(() => {
          this.route.navigate(['/login']);
        }, 3000);
      }
    });
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  public onBlurConfirmPassword(): void {
    if (this.password.value !== this.confirmPassword.value) {
      this.confirmPassword.setErrors({ passwordsMatch: true });
    } else {
      this.confirmPassword.setErrors(null);
    }
  }
}
