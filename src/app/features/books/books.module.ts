import { BooksRoutingModule } from './books-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    BooksRoutingModule,
  ],
})
export class BooksModule {}
