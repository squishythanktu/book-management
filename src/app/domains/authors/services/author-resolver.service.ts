import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Author } from 'src/app/core/models/author.model';
import { AuthorsApiService } from './authors.api.service';
import { AuthorService } from './author.service';

@Injectable({ providedIn: 'root' })
export class AuthorResolverService implements Resolve<Author[]> {
  constructor(
    private authorsApiService: AuthorsApiService,
    private authorService: AuthorService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('in author resolver state');

    const authors = this.authorService.getAuthors();
    if (authors.length === 0) {
      return this.authorsApiService.fetchAuthors();
    } else {
      return authors;
    }
  }
}
