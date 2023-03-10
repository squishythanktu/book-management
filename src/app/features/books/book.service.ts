import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from 'src/app/core/models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  booksChanged = new Subject<Book[]>();
  private books: Book[];

  getBooks() {
    return this.books.slice();
  }

  getBook(id: number) {
    return this.books[id];
  }

  setBooks(books: Book[]) {
    this.books = books;
    this.booksChanged.next(this.books.slice());
  }

  addBook(book: Book) {
    this.books.push(book);
    this.booksChanged.next(this.books.slice());
  }

  updateBook(id: number, newBook: Book) {
    this.books[id] = newBook;
    this.booksChanged.next(this.books.slice());
  }

  deleteBook(id: number) {
    this.books.splice(id, 1);
    this.booksChanged.next(this.books.slice());
  }
}
