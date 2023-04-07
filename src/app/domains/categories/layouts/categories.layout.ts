import { CategoriesApiService } from 'src/app/domains/categories/services/categories.api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import {
  Observable,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.layout.html',
  styleUrls: ['./categories.layout.scss'],
})
export class CategoriesLayout implements OnInit, OnDestroy {
  public hideBackButton: boolean = true;
  public hideAddButton: boolean = false;
  public hideSearchForm: boolean = false;
  public router$: Subscription;
  public categorySearchControl = new FormControl('');

  constructor(
    private router: Router,
    private categoriesApiService: CategoriesApiService
  ) {}

  ngOnInit(): void {
    this.onSearchValueChange();
    this.router$ = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.hideAddButton =
          url.indexOf('add') !== -1 || url.indexOf('update') !== -1;
        this.hideBackButton = url.endsWith('categories') ? true : false;
        this.hideSearchForm = true;
      }
    });
  }

  public onSearchValueChange(): void {
    this.categorySearchControl.valueChanges
      .pipe(
        debounceTime(500), // wait for 500ms before emitting the latest value
        distinctUntilChanged(), // only emit if the value has changed
        switchMap(async (newValue) =>
          this.categoriesApiService.searchChanged(newValue)
        )
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.router$.unsubscribe();
  }
}
