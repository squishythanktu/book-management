import { CategoriesApiService } from './../../categories/categories.api.service';
import { AuthorsApiService } from './../../authors/authors.api.service';
import { Author } from './../../../core/models/author.model';
import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthorsService } from '../../authors/authors.service';
import { CategoriesService } from '../../categories/categories.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss'],
})
export class BookUpdateComponent implements OnInit {
  @Input() categories: Category[];
  public authors: Author[];
  public authorsSubs: Subscription;
  public categoriesSubs: Subscription;
  public selectedImg: any = null;
  public image: any;

  public addForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    publisher: new FormControl('', [Validators.required]),
    categories: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  constructor(
    private bookService: BookService,
    private authorService: AuthorsService,
    private authorsApiService: AuthorsApiService,
    private categoriesService: CategoriesService,
    private categoriesApiService: CategoriesApiService,
    private route: Router
  ) {}

  ngOnInit(): void {
    let authorObs$: Observable<Author[]>;
    let categoriesObs$: Observable<Category[]>;

    authorObs$ = this.authorsApiService.fetchAuthors();
    categoriesObs$ = this.categoriesApiService.fetchCategories();

    authorObs$.subscribe();
    categoriesObs$.subscribe();

    this.authorsSubs = this.authorService.authorsChanged.subscribe(
      (authors: Author[]) => {
        this.authors = authors;
      }
    );

    this.categoriesSubs = this.categoriesService.categoriesChanged.subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      }
    );
  }

  public onAddBook(form: FormGroup): void {}

  public onFileSelected(event: any): void {
    this.selectedImg = event.target.files[0] ?? null;
  }
}
