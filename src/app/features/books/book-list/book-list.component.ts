import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/core/models/book.model';
import { DataStorageService } from 'src/app/share/services/data-storage.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  BooksSubs: Subscription;

  constructor(
    private bookService: BookService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataStorageService.fetchBooks().subscribe((response) => {
      console.log(response);
    });
    this.BooksSubs = this.bookService.booksChanged.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.books = this.bookService.getBooks();
  }

  ngOnDestroy(): void {
    // this.BooksSubs.unsubscribe();
  }
}
