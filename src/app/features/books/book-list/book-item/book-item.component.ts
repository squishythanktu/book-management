import { Component, Input } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input() book: Book;
  @Input() index: number;
}
