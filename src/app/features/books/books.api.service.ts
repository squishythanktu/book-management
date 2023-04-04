import { BookService } from './../../features/books/book.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from 'src/app/core/models/book.model';
import { Pagination } from 'src/app/core/models/pagination.model';
import { Observable, tap } from 'rxjs';

export interface BooksResponseData {
  pagination: Pagination;
  data: Book[];
}

@Injectable({ providedIn: 'root' })
export class BooksApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private bookService: BookService) {}

  public fetchBooks(): Observable<BooksResponseData> {
    console.log('fetch books');
    return this.http.get<BooksResponseData>(`${this.apiUrl}/books`).pipe(
      tap((response) => {
        this.bookService.setBooks(response.data);
      })
    );
  }

  public addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/books`, book).pipe(
      tap((response) => {
        console.log('response', response);
        this.bookService.addBook(response);
      })
    );
  }

  public updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/books/${id}`, book).pipe(
      tap((response) => {
        this.bookService.updateBook(book.id, response);
      })
    );
  }

  public deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/books/${id}`).pipe(
      tap((response) => {
        this.bookService.deleteBook(id);
      })
    );
  }
}
