import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthorsComponent } from './authors.component';
import { AuthorsRoutingModule } from './authors.routes';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [AuthorsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthorsRoutingModule,
    MatTabsModule,
  ],
})
export class AuthorsModule {}
