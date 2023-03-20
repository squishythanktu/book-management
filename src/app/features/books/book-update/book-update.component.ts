import { BooksApiService } from './../books.api.service';
import { CategoriesApiService } from './../../categories/categories.api.service';
import { AuthorsApiService } from './../../authors/authors.api.service';
import { Author } from './../../../core/models/author.model';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { AuthorsService } from '../../authors/authors.service';
import { CategoriesService } from '../../categories/categories.service';
import { Book } from 'src/app/core/models/book.model';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss'],
})
export class BookUpdateComponent implements OnInit {
  @Input() categories: Category[];
  public updateMode: boolean = false;
  @ViewChild('fileInput') fileInput: any;
  public authors: Author[];
  public authorsSubs: Subscription;
  public categoriesSubs: Subscription;
  public imageSubs: Subscription;
  public selectedImg: any = null;
  public selectedImgEncoded: string | null = null;
  public id: number;

  public myForm: FormGroup;

  constructor(
    private bookService: BookService,
    private booksApiService: BooksApiService,
    private authorService: AuthorsService,
    private authorsApiService: AuthorsApiService,
    private categoriesService: CategoriesService,
    private categoriesApiService: CategoriesApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/),
      ]),
      year: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      publisher: new FormControl('', [Validators.required]),
      categories: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      cover: new FormControl('', [Validators.required]),
    });
  }

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

    // this.route.params.subscribe((params: Params) => {
    //   this.id = params['id'];
    //   if (params['id'] != null) {
    //     this.updateMode.emit(true);
    //   } else {
    //     this.updateMode.emit(false);
    //   }
    //   // this.loadBookToForm();
    // });
  }

  public loadBookToForm(): void {
    let bookName: string = '';
    let bookDescription: string = '';
    let bookPrice: number = undefined;
    let bookYear: number = undefined;
    let bookAuthor: Author = undefined;
    let bookPublisher: string = '';
    let bookCategory: Category[];
    let bookCover: string = '';

    if (this.updateMode) {
      const book = this.bookService.getBook(this.id);

      bookName = book.name;
      bookDescription = book.description;
      bookPrice = book.price;
      bookYear = book.year;
      bookAuthor = book.author;
      bookPublisher = book.publisher;
      bookCover = book.cover;
    }
  }

  public onSubmitBook(form: FormGroup): void {
    let book = this.FormFilter(form);
    console.log('book', book);

    let booksObs$: Observable<Book>;
    if (this.updateMode) {
    } else {
      booksObs$ = this.booksApiService.addBook(book);
      booksObs$.subscribe();

      this.router.navigate(['/books']);
    }
  }

  public onFileSelected(event: any): void {
    this.selectedImg = event.target.files[0] ?? null;
    if (this.selectedImg) {
      this.imageSubs = this.convertBase64(this.selectedImg).subscribe(
        (base64String) => {
          this.myForm.get('cover').setValue(base64String as string);
        }
      );
    }
  }

  public onChooseImageClick(): void {
    this.fileInput.nativeElement.click();
  }

  public convertBase64(file: any): Observable<string | ArrayBuffer> {
    return new Observable((observer) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        const base64String = fileReader.result as string;
        const base64Data = base64String.substring(23);
        observer.next(base64Data);
        observer.complete();
      };

      file.onerror = (error: any) => {
        observer.error(error);
      };
    });
  }
  public FormFilter(form: FormGroup): any {
    //create book from form value
    const book = Object.assign({}, form.value);
    //modified some field
    delete book.author.books;

    book.categories.forEach((category: Category) => {
      delete category.books;
    });

    book.price = parseFloat(book.price);
    book.year = parseFloat(book.year);
    return book;
  }
}
