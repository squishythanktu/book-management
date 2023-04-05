import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesService } from './categories.service';
import { Category } from 'src/app/core/models/category.model';

@Injectable({ providedIn: 'root' })
export class CategoriesApiService {
  private apiUrl = environment.apiUrl;
  public searchCategoryEmitter: BehaviorSubject<string> = new BehaviorSubject(
    ''
  );

  constructor(
    private http: HttpClient,
    private categoriesService: CategoriesService
  ) {}

  public fetchCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`).pipe(
      tap((categories) => {
        this.categoriesService.setCategories(categories);
      })
    );
  }

  public deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/categories/${id}`).pipe(
      tap((response) => {
        this.categoriesService.deleteCategory(id);
      })
    );
  }

  public searchChanged(newValue: string): void {
    this.searchCategoryEmitter.next(newValue);
  }

  public searchCategory(characters: string): Observable<Category[]> {
    return this.http.get<Category[]>(
      `${this.apiUrl}/categories/search?categoryName=${characters}`
    );
  }
}
