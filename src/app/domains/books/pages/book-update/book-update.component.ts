import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Book } from 'src/app/core/models/book.model';
import { ConvertBase64 } from 'src/app/share/helpers/convertBase64.helper';
import { BookService } from '../../services/book.service';
import { BooksApiService } from '../../services/books.api.service';
import { Author } from 'src/app/core/models/author.model';
import { AuthorsApiService } from 'src/app/domains/authors/services/authors.api.service';
import { CategoriesApiService } from 'src/app/domains/categories/services/categories.api.service';
import { DefaultImgConstant } from 'src/app/core/constants/default-img.constant';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss'],
})
export class BookUpdateComponent {
  @Input() categories: Category[];
  @ViewChild('fileInput') fileInput: ElementRef;
  public updateMode: boolean = false;
  public authors: Author[];
  public imageSubs: Subscription;
  public selectedImg: any = null;
  public id: number;
  public myForm: FormGroup;
  public author$: Observable<Author[]>;
  public categories$: Observable<Category[]>;

  constructor(
    private bookService: BookService,
    private booksApiService: BooksApiService,
    private authorsApiService: AuthorsApiService,
    private categoriesApiService: CategoriesApiService,
    private router: Router,
    private route: ActivatedRoute,
    private convertBase64: ConvertBase64
  ) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.updateMode = true;
      } else {
        this.updateMode = false;
      }
      this.loadBookToForm();
    });
  }

  public formFilter(form: FormGroup): Book {
    const book = { ...form.value };
    delete book.author.books;
    book.categories.forEach((category: Category) => {
      delete category.books;
    });

    if (!book.cover) {
      const defaultImg = DefaultImgConstant.book;
      book.cover = defaultImg;
    }

    book.price = parseFloat(book.price);
    book.year = parseFloat(book.year);
    return book;
  }

  public compareAuthorObjects(author1: Author, author2: Author): boolean {
    return author1 && author2 && author1.id === author2.id;
  }

  public compareCategoryObjects(
    category1: Category,
    category2: Category
  ): boolean {
    return category1 && category2 && category1.id === category2.id;
  }

  public loadBookToForm(): void {
    let bookName: string = '';
    let bookDescription: string = '';
    let bookPrice: number = undefined;
    let bookYear: number = undefined;
    let bookAuthor: Author = undefined;
    let bookPublisher: string = '';
    let bookCategories: Category[];
    let bookCover: string = '';

    if (this.updateMode) {
      const book = this.bookService.getBook(this.id);
      bookName = book.name;
      bookDescription = book.description;
      bookPrice = book.price;
      bookYear = book.year;
      bookAuthor = book.author;
      bookPublisher = book.publisher;
      bookCategories = book.categories;
    }
    this.myForm = new FormGroup({
      name: new FormControl(bookName, [Validators.required]),
      description: new FormControl(bookDescription, [Validators.required]),
      price: new FormControl(bookPrice, [
        Validators.required,
        Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/),
      ]),
      year: new FormControl(bookYear, [
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      publisher: new FormControl(bookPublisher, [Validators.required]),
      categories: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      cover: new FormControl(null),
    });
    this.author$ = this.authorsApiService.fetchAuthors();
    if (bookAuthor) {
      this.myForm.controls['author'].setValue(bookAuthor);
    }
    this.categories$ = this.categoriesApiService.fetchCategories();
    if (bookCategories) {
      this.myForm.controls['categories'].setValue(bookCategories);
    }
  }

  public onSubmitBook(form: FormGroup): void {
    let book = this.formFilter(form);
    let book$: Observable<Book>;
    if (this.myForm.valid) {
      if (this.updateMode) {
        book$ = this.booksApiService.updateBook(this.id, book);
      } else {
        book$ = this.booksApiService.addBook(book);
      }
      book$.subscribe();
      this.router.navigate(['/books']);
    }
  }

  public onCancelForm(): void {
    this.router.navigate(['/books']);
  }

  public onFileSelected(event: any): void {
    this.selectedImg = event.target.files[0] ?? null;
    if (this.selectedImg) {
      this.imageSubs = this.convertBase64
        .ConvertBase64(this.selectedImg)
        .subscribe((base64String) => {
          console.log(base64String);
          this.myForm.get('cover').setValue(base64String as string);
        });
    }
  }

  public onChooseImageClick(): void {
    this.fileInput.nativeElement.click();
  }
}
