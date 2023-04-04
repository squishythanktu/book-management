import { NgModule } from '@angular/core';
import { AuthorUpdateComponent } from './author-update.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [AuthorUpdateComponent],
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ],
})
export class AuthorUpdateModule {}
