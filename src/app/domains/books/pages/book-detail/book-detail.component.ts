import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from 'src/app/core/models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent {
  public book: Book;
  public id: number;
  public dataSource: MatTableDataSource<any>;
  public displayedColumns = ['property', 'value'];

  constructor(private bookService: BookService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.loadBookDetails();
    });
  }

  private loadBookDetails(): void {
    this.book = this.bookService.getBook(this.id);
    this.dataSource = new MatTableDataSource([
      { property: 'Name', value: this.book.name },
      { property: 'Description', value: this.book.description },
      { property: 'Author', value: this.book.author.name },
      { property: 'Publisher', value: this.book.publisher },
      { property: 'Year', value: this.book.year.toString() },
      {
        property: 'Category',
        value: this.book.categories.map((c) => c.name).join(', '),
      },
      { property: 'Price', value: this.book.price.toString() },
    ]);
  }
}
