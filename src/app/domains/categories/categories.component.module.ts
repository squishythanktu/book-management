import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesRoutingModule } from './categories.routes';
import { CategoriesComponent } from './categories.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoriesRoutingModule,
    MatTabsModule,
  ],
})
export class CategoriesModule {}
