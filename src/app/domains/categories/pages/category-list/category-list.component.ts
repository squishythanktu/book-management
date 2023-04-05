import { CategoriesApiService } from 'src/app/domains/categories/services/categories.api.service';
import { Component } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  public categories$: Observable<Category[]>;

  constructor(private categoriesApiService: CategoriesApiService) {
    this.categoriesApiService.searchCategoryEmitter.subscribe(
      (searchResult) => {
        // this.isLoading = true;
        // this.notFound = false;
        if (searchResult.trim() === '') {
          this.categories$ = this.categoriesApiService
            .fetchCategories()
            .pipe(delay(300));
        } else {
          this.categories$ = this.categoriesApiService
            .searchCategory(searchResult)
            .pipe(delay(300));
        }
        this.categories$.subscribe((categories: Category[]) => {
          if (categories.length == 0) {
            // this.notFound = true;
          }
          // this.isLoading = false;
          // this.authorsCount = authors.length;
        });
      }
    );
  }
}
