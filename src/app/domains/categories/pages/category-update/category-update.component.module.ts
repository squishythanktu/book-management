import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryUpdateComponent } from './category-update.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [CategoryUpdateComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [CategoryUpdateComponent],
})
export class CategoryUpdateModule {}
