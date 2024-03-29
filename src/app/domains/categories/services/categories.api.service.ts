import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesService } from './categories.service';
import { Category } from 'src/app/core/models/category.model';

@Injectable({ providedIn: 'root' })
export class CategoriesApiService {
  private apiUrl = environment.apiUrl;

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
}
