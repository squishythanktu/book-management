import { MatPaginator } from '@angular/material/paginator';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/core/models/author.model';
import { AuthorsApiService } from '../authors.api.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public pageSize: number = 4;
  public pageIndex: number = 0;
  public authorsCount: number = 0;
  public authors$: Observable<Author[]>;

  constructor(private authorsApiService: AuthorsApiService) {
    console.log('in authors page');
    this.authors$ = this.authorsApiService.fetchAuthors();
    this.authors$.subscribe((authors: Author[]) => {
      this.authorsCount = authors.length;
    });
  }

  public onPageChanged(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  ngAfterViewInit(): void {
    this.paginator?.page.subscribe((event) => {
      this.onPageChanged(event);
    });
  }
}
