import { NgModule } from '@angular/core';
import { CategoryListComponent } from './category-list.component';
import { CategoryItemModule } from '../../components/category-item/category-item.component.module';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [CommonModule, CategoryItemModule, MatPaginatorModule],
  exports: [CategoryListComponent],
})
export class CategoryListModule {}
