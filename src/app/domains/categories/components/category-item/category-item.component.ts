import { Component, Input } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent {
  @Input() category: Category;
  @Input() id: number;
}
