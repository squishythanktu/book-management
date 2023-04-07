import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Author } from 'src/app/core/models/author.model';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss'],
})
export class AuthorDetailComponent {
  public author: Author;
  public id: number;
  public dataSource: MatTableDataSource<any>;
  public displayedColumns = ['property', 'value'];

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.loadAuthorDetails();
    });
  }

  public loadAuthorDetails(): void {
    this.author = this.authorService.getAuthor(this.id);
    this.dataSource = new MatTableDataSource([
      { property: 'Name', value: this.author.name },
      { property: 'Website', value: this.author.website },
      {
        property: 'Birthday',
        value: new Date(this.author.birthday).toLocaleDateString(),
      },
    ]);
  }
}
