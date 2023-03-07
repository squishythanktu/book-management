import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { UsersRoutingModule } from './users.routes';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
