import { BooksApiService, BooksResponseData } from './../books.api.service';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Book } from 'src/app/core/models/book.model';
import { BookService } from '../book.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSize: number = 3;
  pageIndex: number = 0;
  books: Book[];
  booksSubs: Subscription;
  constructor(
    private bookService: BookService,
    private booksApiService: BooksApiService
  ) {}

  ngOnInit(): void {
    let bookObs$: Observable<BooksResponseData>;

    bookObs$ = this.booksApiService.fetchBooks();

    bookObs$.subscribe();

    this.booksSubs = this.bookService.booksChanged.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      this.pageIndex = this.paginator.pageIndex;
      this.pageSize = this.paginator.pageSize;
    });
  }

  ngOnDestroy(): void {
    this.booksSubs.unsubscribe();
  }
}
