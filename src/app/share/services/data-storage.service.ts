import { BookService } from './../../features/books/book.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from 'src/app/core/models/book.model';

export interface BooksResponseData {
    // pagi
}

@Injectable({providedIn: 'root'})
export class DataStorageService {
    apiUrl = environment.apiUrl; 
    constructor(private http: HttpClient, private bookService: BookService) {}

    fetchBooks() {
        // return this.http.get<>(`${this.apiUrl}/books`)
        // .pipe()
    }
}