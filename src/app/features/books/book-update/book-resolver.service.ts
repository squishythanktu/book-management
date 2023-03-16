import { BookService } from './../book.service';
import { BooksApiService, BooksResponseData } from './../books.api.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Book } from 'src/app/core/models/book.model';

@Injectable({ providedIn: 'root' })
export class BookResolverService
  implements Resolve<Book[] | BooksResponseData>
{
  constructor(
    private bookApiService: BooksApiService,
    private bookService: BookService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('in resolver');

    const books = this.bookService.getBooks();

    if (books.length === 0) {
      return this.bookApiService.fetchBooks();
    } else {
      return books;
    }
  }
}
