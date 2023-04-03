import { Component, Input } from '@angular/core';
import { Author } from 'src/app/core/models/author.model';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss'],
})
export class AuthorItemComponent {
  @Input() author: Author;
  @Input() index: number;
}
