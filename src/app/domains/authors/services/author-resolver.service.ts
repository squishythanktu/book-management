import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Author } from 'src/app/core/models/author.model';
import { AuthorsApiService } from './authors.api.service';
import { AuthorService } from './author.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthorResolverService implements Resolve<Author[]> {
  constructor(
    private authorsApiService: AuthorsApiService,
    private authorService: AuthorService
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Author[]> | Author[] {
    const authors = this.authorService.getAuthors();
    if (authors.length === 0) {
      return this.authorsApiService.fetchAuthors();
    } else {
      return authors;
    }
  }
}
