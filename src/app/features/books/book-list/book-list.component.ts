import { Book } from 'src/app/core/models/book.model';
import { BooksApiService, BooksResponseData } from './../books.api.service';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, UrlSegment } from '@angular/router';

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

  ngAfterViewInit(): void {
    this.paginator?.page.subscribe((event) => {
      this.onPageChanged(event);
    });
  }

  public onPageChanged(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  // public renderUI(book: Book[]): void {
  //   this.books$ = 
  // }
}
