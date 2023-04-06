import { AuthorService } from './../../services/author.service';
import { MatPaginator } from '@angular/material/paginator';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Author } from 'src/app/core/models/author.model';
import { AuthorsApiService } from '../../services/authors.api.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public pageSize: number = 8;
  public pageIndex: number = 0;
  public authorsCount: number = 0;
  public authors$: Observable<Author[]>;
  public isLoading: boolean = false;
  public notFound: boolean = false;

  constructor(private authorsApiService: AuthorsApiService) {
    this.authorsApiService.searchAuthorEmitter.subscribe((searchResult) => {
      this.isLoading = true;
      this.notFound = false;
      if (searchResult.trim() === '') {
        this.authors$ = this.authorsApiService.fetchAuthors().pipe(delay(300));
      } else {
        this.authors$ = this.authorsApiService
          .searchAuthor(searchResult)
          .pipe(delay(300));
      }
      this.authors$.subscribe((authors: Author[]) => {
        if (authors.length == 0) {
          this.notFound = true;
        }
        this.isLoading = false;
        this.authorsCount = authors.length;
      });
    });
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
