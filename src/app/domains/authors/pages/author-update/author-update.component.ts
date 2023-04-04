import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Author } from 'src/app/core/models/author.model';
import { ConvertBase64 } from 'src/app/share/helpers/convertBase64.helper';
import { AuthorsApiService } from '../../services/authors.api.service';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.scss'],
})
export class AuthorUpdateComponent {
  @ViewChild('fileInput') fileInput: ElementRef;
  public updateMode: boolean = false;
  public myForm: FormGroup;
  public selectedImg: any = null;
  public id: number;
  public minDate: Date;
  public maxDate: Date;

  constructor(
    private convertBase64: ConvertBase64,
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService,
    private authorsApiService: AuthorsApiService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.id != null) {
        this.updateMode = true;
      } else {
        this.updateMode = false;
      }
      this.loadAuthorToForm();
    });

    const currentYear = new Date().getUTCFullYear();
    this.minDate = new Date(Date.UTC(currentYear - 150, 0, 1, 0, 0, 0));
    this.maxDate = new Date(Date.UTC(currentYear - 1, 11, 31, 23, 59, 59));
  }

  public loadAuthorToForm(): void {
    let authorName: string = '';
    let authorWebsite: string = '';
    let authorBirthday: Date = undefined;

    if (this.updateMode) {
      const author = this.authorService.getAuthor(this.id);
      console.log('author: ', author);
      authorName = author.name;
      authorWebsite = author.website;
      authorBirthday = author.birthday;
    }
    this.myForm = new FormGroup({
      name: new FormControl(authorName, [Validators.required]),
      website: new FormControl(authorWebsite, [Validators.required]),
      birthday: new FormControl(authorBirthday, [Validators.required]),
      cover: new FormControl(null),
    });
  }

  public onSubmitAuthor(myForm: FormGroup) {
    let author = this.formFilter(myForm);
    let author$: Observable<Author>;
    if (this.myForm.valid) {
      if (this.updateMode) {
        author$ = this.authorsApiService.updateAuthor(this.id, author);
      } else {
        author$ = this.authorsApiService.addAuthor(author);
      }
      author$.subscribe();
      this.router.navigate(['/authors']);
    }
  }

  public formFilter(form: FormGroup): Author {
    const author = { ...form.value };
    if (author.birthday) {
      author.birthday = new Date(author.birthday);
      author.birthday.setHours(author.birthday.getHours() + 7);
    }
    return author;
  }

  public onFileSelected(event: any): void {
    this.selectedImg = event.target.files[0] ?? null;
    if (this.selectedImg) {
      this.convertBase64
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
