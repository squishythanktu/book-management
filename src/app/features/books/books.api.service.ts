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
    return this.http.get<BooksResponseData>(`${this.apiUrl}/books`).pipe(
      tap((response) => {
        this.bookService.setBooks(response.data);
      })
    );
  }

  public addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/books`, book).pipe(
      tap((response) => {
        this.bookService.addBook(response);
      })
    );
  }
}
