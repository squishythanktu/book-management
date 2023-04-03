import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  switchMap,
  Observable,
} from 'rxjs';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/core/models/author.model';
import { AuthorsApiService } from './authors.api.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  public hideBackButton: boolean = true;
  public hideAddButton: boolean = true;
  public authorSearchControl = new FormControl('');

  constructor(
    private router: Router,
    private authorsApiService: AuthorsApiService,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.hideAddButton =
          url.indexOf('add') !== -1 || url.indexOf('update') !== -1;
        this.hideBackButton = url.endsWith('authors') ? true : false;
      }
    });
  }

  ngOnInit(): void {
    this.onSearchValueChange();
  }

  public onSearchValueChange(): void {
    this.authorSearchControl.valueChanges
      .pipe(
        debounceTime(500), // wait for 500ms before emitting the latest value
        distinctUntilChanged(), // only emit if the value has changed
        switchMap(async (newValue) =>
          this.authorsApiService.searchChanged(newValue)
        )
      )
      .subscribe();
  }
}
