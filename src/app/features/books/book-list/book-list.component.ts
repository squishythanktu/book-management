import { BooksApiService, BooksResponseData } from './../books.api.service';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public pageSize: number = 6;
  public pageIndex: number = 0;
  public books$: Observable<BooksResponseData>;

  constructor(private booksApiService: BooksApiService) {
    this.books$ = this.booksApiService.fetchBooks();
  }

  ngAfterViewInit() {
    this.paginator?.page.subscribe((event) => {
      this.onPageChanged(event);
    });
  }

  public onPageChanged(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
