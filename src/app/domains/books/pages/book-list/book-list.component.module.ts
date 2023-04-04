import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { BookItemModule } from '../../components/book-item/book-item.component.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [BookListComponent],
  imports: [CommonModule, BookItemModule, MatPaginatorModule, MatButtonModule],
  exports: [BookListComponent],
})
export class BookListModule {}
