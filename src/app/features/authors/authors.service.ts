import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Author } from 'src/app/core/models/author.model';

@Injectable({ providedIn: 'root' })
export class AuthorsService {
  public authorsChanged = new Subject<Author[]>();
  private authors: Author[] = [];

  public getAuthors(): Author[] {
    return this.authors.slice();
  }

  public getAuthor(id: number): Author {
    console.log('log authors: ', this.authors);

    return this.authors.find((author) => author.id == id);
  }

  public setAuthors(authors: Author[]): void {
    // console.log(authors);
    this.authors = authors;
    this.authorsChanged.next(this.authors.slice());
  }

  public addAuthor(author: Author): void {
    this.authors.push(author);
    this.authorsChanged.next(this.authors.slice());
  }

  public updateAuthor(id: number, newAuthor: Author): void {
    this.authors[id] = newAuthor;
    this.authorsChanged.next(this.authors.slice());
  }

  public deleteAuthor(id: number): void {
    this.authors.splice(id, 1);
    this.authorsChanged.next(this.authors.slice());
  }
}
