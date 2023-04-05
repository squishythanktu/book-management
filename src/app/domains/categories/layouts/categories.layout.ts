import { CategoriesApiService } from 'src/app/domains/categories/services/categories.api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.layout.html',
  styleUrls: ['./categories.layout.scss'],
})
export class CategoriesLayout implements OnInit {
  public hideBackButton: boolean = true;
  public hideAddButton: boolean = true;
  public categorySearchControl = new FormControl('');

  constructor(
    private router: Router,
    private categoriesApiService: CategoriesApiService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.hideAddButton =
          url.indexOf('add') !== -1 || url.indexOf('update') !== -1;
        this.hideBackButton = url.endsWith('categories') ? true : false;
      }
    });
  }

  ngOnInit(): void {
    this.onSearchValueChange();
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
}
