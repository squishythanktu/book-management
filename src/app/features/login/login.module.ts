import { ShareModule } from '../../share/share/share.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShareModule,
    RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
    MaterialModule
  ],
})
export class LoginModule {}
