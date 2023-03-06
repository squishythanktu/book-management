import { ShareModule } from '../../share/share/share.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { AuthComponent } from './auth.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShareModule,
    RouterModule.forChild([{ path: 'auth', component: AuthComponent}]),
    MaterialModule
  ],
})
export class AuthModule {}
