import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import {
  BooksApiService,
  BooksResponseData,
} from '../../services/books.api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public pageSize: number = 6;
  public pageIndex: number = 0;
  public isLoading = true;
  public books$: Observable<BooksResponseData>;

  constructor(private booksApiService: BooksApiService) {}

  ngOnInit(): void {
    this.isLoading = true;
    console.log(this.isLoading);
    this.books$ = this.booksApiService.fetchBooks().pipe(delay(500));
    this.books$.subscribe(() => {
      this.isLoading = false;
      console.log(this.isLoading);
    });
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
}
