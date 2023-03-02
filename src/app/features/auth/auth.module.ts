import { ShareModule } from './../../share/share/share.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShareModule,
    RouterModule.forChild([{ path: 'auth', component: AuthComponent }]),
  ],
})
export class AuthModule {}
