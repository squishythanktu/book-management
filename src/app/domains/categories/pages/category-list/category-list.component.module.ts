import { NgModule } from '@angular/core';
import { CategoryListComponent } from './category-list.component';
import { CategoryItemModule } from '../../components/category-item/category-item.component.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [CommonModule, CategoryItemModule],
  exports: [CategoryListComponent],
})
export class CategoryListModule {}
