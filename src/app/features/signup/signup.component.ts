import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupService, SignupResponseData } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  hide = true;
  isLoading = false;
  signupSuccess: string = null;
  error: string = null;

  constructor(private signupService: SignupService, private route: Router) {}

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  onSignup(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    
    const nameValue = this.signupForm.get('name').value;
    const usernameValue = this.signupForm.get('username').value;
    const passwordValue = this.signupForm.get('password').value;

    let authObs: Observable<SignupResponseData | { message: string }>;
    authObs = this.signupService.signup(nameValue, usernameValue, passwordValue);
    console.log("authObs" + authObs);
    
    authObs.subscribe(
      (resData) => {
        if(resData.hasOwnProperty('message')) {
          this.error = (resData as { message: string }).message;
        }
        else {
          this.signupSuccess = "Sign up successfully!"
          setTimeout(() => {
            this.route.navigate(['/login']);
          }, 3000)
        }
      }
    )
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  onBlurConfirmPassword() {
    if (this.password.value !== this.confirmPassword.value) {
      this.confirmPassword.setErrors({ passwordsMatch: true });
    } else {
      this.confirmPassword.setErrors(null);
    }
  }
}
