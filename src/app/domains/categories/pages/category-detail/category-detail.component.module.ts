import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryDetailComponent } from './category-detail.component';
import { MatTableModule } from '@angular/material/table';
import { BookItemModule } from 'src/app/domains/books/components/book-item/book-item.component.module';

@NgModule({
  declarations: [CategoryDetailComponent],
  imports: [CommonModule, MatTableModule, BookItemModule],
  exports: [CategoryDetailComponent],
})
export class CategoryDetailModule {}
