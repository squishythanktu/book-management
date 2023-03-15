import { BooksRoutingModule } from './books.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { BookUpdateComponent } from './book-update/book-update.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailComponent,
    BookUpdateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
  ],
})
export class BooksModule {}
