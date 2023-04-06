import { CategoriesService } from './categories.service';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesApiService } from './categories.api.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoryResolverService implements Resolve<Category[]> {
  constructor(
    private categoriesApiService: CategoriesApiService,
    private categoriesService: CategoriesService
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Category[]> | Category[] {
    const categories = this.categoriesService.getCategories();
    if (categories.length === 0) {
      return this.categoriesApiService.fetchCategories();
    } else {
      return categories;
    }
  }
}
