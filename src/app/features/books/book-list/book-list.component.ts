import { BooksResponseData } from './../../../share/services/data-storage.service';
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
import { DataStorageService } from 'src/app/share/services/data-storage.service';
import { BookService } from '../book.service';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';

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
  bookSubs: Subscription;
  constructor(
    private bookService: BookService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bookSubs = this.dataStorageService
      .fetchBooks()
      .pipe(tap((response) => console.log(response)))
      .subscribe();

    this.bookSubs = this.bookService.booksChanged.subscribe((books: Book[]) => {
      this.books = books;
    });
    // this.books = this.bookService.getBooks();
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      this.pageIndex = this.paginator.pageIndex;
      this.pageSize = this.paginator.pageSize;
    });
  }

  ngOnDestroy(): void {
    this.bookSubs.unsubscribe();
  }
}
