import { BooksRoutingModule } from './books.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    MatTabsModule,
  ],
})
export class BooksModule {}
