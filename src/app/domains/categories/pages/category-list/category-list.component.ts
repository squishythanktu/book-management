import { CategoriesApiService } from 'src/app/domains/categories/services/categories.api.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public pageSize: number = 8;
  public pageIndex: number = 0;
  public categoriesCount: number = 0;
  public isLoading: boolean = false;
  public notFound: boolean = false;
  public categories$: Observable<Category[]>;

  constructor(private categoriesApiService: CategoriesApiService) {
    this.categoriesApiService.searchCategoryEmitter.subscribe(
      (searchResult) => {
        this.isLoading = true;
        this.notFound = false;
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
            this.notFound = true;
          }
          this.isLoading = false;
          this.categoriesCount = categories.length;
        });
      }
    );
  }

  public onPageChange(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  ngAfterViewInit(): void {
    this.paginator?.page.subscribe((event) => {
      this.onPageChange(event);
    });
  }
}
