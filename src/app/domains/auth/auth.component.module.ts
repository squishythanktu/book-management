import { ShareModule } from '../../share/share/share.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShareModule,
    RouterModule.forChild([{ path: 'auth', component: AuthComponent }]),
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class AuthModule {}
