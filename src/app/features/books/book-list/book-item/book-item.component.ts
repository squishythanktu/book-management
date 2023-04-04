import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/core/models/book.model';
import { BookItemOptionsComponent } from './book-item-options/book-item-options.component';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input() book: Book;
  @Input() index: number;

  constructor(private dialog: MatDialog) {}
  public openConfirmDialog(): void {
    this.dialog.open(BookItemOptionsComponent, {
      data: {
        title: 'Delete book',
        message: 'Are you sure want to delete book?',
      },
      height: '200px',
      width: '300px',
    });
  }
}
