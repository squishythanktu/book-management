import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from 'src/app/core/models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  public booksChanged = new Subject<Book[]>();
  private books: Book[] = [];

  public getBooks(): Book[] {
    return this.books.slice();
  }

  public getBook(id: number): Book {
    return this.books.find((book) => book.id == id);
  }

  public setBooks(books: Book[]): void {
    this.books = books;
    this.booksChanged.next(this.books.slice());
  }

  public addBook(book: Book): void {
    this.books.push(book);
    this.booksChanged.next(this.books.slice());
  }

  public updateBook(id: number, newBook: Book): void {
    this.books[id] = newBook;
    this.booksChanged.next(this.books.slice());
  }

  public deleteBook(id: number): void {
    this.books.splice(id, 1);
    this.booksChanged.next(this.books.slice());
  }
}
