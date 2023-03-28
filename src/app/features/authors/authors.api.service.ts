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
    console.log('fetch authors');
    return this.http.get<Author[]>(`${this.apiUrl}/authors`).pipe(
      tap((authors) => {
        this.authorsService.setAuthors(authors);
      })
    );
  }

  public deleteAuthor(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/authors/${id}`)
      .pipe
      // tap((response) => this.authorsService.deleteAuthor(id))
      ();
  }
}
