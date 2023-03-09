import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: 'signup', component: SignupComponent }]),
    ShareModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class SignupModule {}
