import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private categories: Category[];
  public categoriesChanged = new Subject<Category[]>();

  public getCategories(): Category[] {
    return this.categories.slice();
  }

  public getCategory(id: number): Category {
    return this.categories.find((category) => category.id == id);
  }

  public setCategories(categories: Category[]): void {
    this.categories = categories;
    this.categoriesChanged.next(this.categories.slice());
  }

  public addCategory(category: Category): void {
    this.categories.push(category);
    this.categoriesChanged.next(this.categories.slice());
  }

  public updateCategory(id: number, newCategory: Category): void {
    this.categories[id] = newCategory;
    this.categoriesChanged.next(this.categories.slice());
  }

  public deleteCategory(id: number): void {
    this.categories.splice(id, 1);
    this.categoriesChanged.next(this.categories.slice());
  }
}
