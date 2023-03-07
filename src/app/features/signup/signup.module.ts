import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { SignupComponent } from './signup.component';
import { ShareModule } from 'src/app/share/share/share.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: 'signup', component: SignupComponent}]),
    ShareModule
  ],
})
export class SignupModule {}
