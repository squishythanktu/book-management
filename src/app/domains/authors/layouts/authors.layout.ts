import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorsApiService } from '../services/authors.api.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.layout.html',
  styleUrls: ['./authors.layout.scss'],
})
export class AuthorsLayout implements OnInit, OnDestroy {
  public hideBackButton: boolean = true;
  public hideAddButton: boolean = false;
  public hideSearchForm: boolean = false;
  public router$: Subscription;
  public authorSearchControl = new FormControl('');

  constructor(
    private router: Router,
    private authorsApiService: AuthorsApiService
  ) {}

  ngOnInit(): void {
    this.onSearchValueChange();
    this.router$ = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.hideAddButton =
          url.indexOf('add') !== -1 || url.indexOf('update') !== -1;
        this.hideBackButton = url.endsWith('authors') ? true : false;
        this.hideSearchForm = true;
      }
    });
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
  ngOnDestroy(): void {
    this.router$.unsubscribe();
  }
}
