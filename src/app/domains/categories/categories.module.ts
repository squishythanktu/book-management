import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesRoutingModule } from './categories.routes';
import { CategoriesLayout } from './layouts/categories.layout';
import { CategoryListModule } from './pages/category-list/category-list.component.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CategoryDetailModule } from './pages/category-detail/category-detail.component.module';
import { CategoryUpdateModule } from './pages/category-update/category-update.component.module';

@NgModule({
  declarations: [CategoriesLayout],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoriesRoutingModule,
    CategoryListModule,
    CategoryDetailModule,
    CategoryUpdateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [CategoriesLayout],
})
export class CategoriesModule {}
