import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { SignupComponent } from './signup.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
=======
import { MaterialModule } from 'src/app/material/material.module';
import { SignupComponent } from './signup.component';
import { ShareModule } from 'src/app/share/share/share.module';
>>>>>>> 514a1b4 (features/login-signup)

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    RouterModule.forChild([{ path: 'signup', component: SignupComponent }]),
    ShareModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
=======
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: 'signup', component: SignupComponent}]),
    ShareModule
>>>>>>> 514a1b4 (features/login-signup)
  ],
})
export class SignupModule {}
