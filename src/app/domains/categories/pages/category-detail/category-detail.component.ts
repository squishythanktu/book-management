import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent {
  public id: number;
  public category: Category;
  public dataSource: MatTableDataSource<any>;
  public displayedColumns = ['property', 'value'];

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.loadCategoriesDetails();
    });
  }

  public loadCategoriesDetails(): void {
    this.category = this.categoriesService.getCategory(this.id);
    this.dataSource = new MatTableDataSource([
      { property: 'name', value: this.category.name },
      { property: 'description', value: this.category.description },
    ]);
  }
}
