import { AuthorsService } from './authors.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Author } from 'src/app/core/models/author.model';

@Injectable({ providedIn: 'root' })
export class AuthorsApiService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authorsService: AuthorsService
  ) {}

  public fetchAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.apiUrl}/authors`).pipe(
      tap((authors) => {
        this.authorsService.setAuthors(authors);
      })
    );
  }
}
