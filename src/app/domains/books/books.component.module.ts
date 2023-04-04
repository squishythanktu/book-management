import { BooksRoutingModule } from './books.routes';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BookListModule } from './pages/book-list/book-list.component.module';
import { BookDetailModule } from './pages/book-detail/book-detail.component.module';
import { BookUpdateModule } from './pages/book-update/book-update.component.module';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatIconModule,
    BookListModule,
    BookDetailModule,
    BookUpdateModule,
    MatButtonModule,
  ],
  exports: [BooksComponent],
})
export class BooksModule {}
