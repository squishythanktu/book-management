import { Injectable } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  private books: Book[] = [];

  public getBooks(): Book[] {
    return this.books.slice();
  }

  public getBook(id: number): Book {
    return this.books.find((book) => book.id == id);
  }

  public setBooks(books: Book[]): void {
    this.books = books;
  }

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public updateBook(id: number, newBook: Book): void {
    this.books[id] = newBook;
  }

  public deleteBook(id: number): void {
    this.books.splice(id, 1);
  }
}
