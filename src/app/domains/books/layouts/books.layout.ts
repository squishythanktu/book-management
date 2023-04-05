import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.layout.html',
  styleUrls: ['./books.layout.scss'],
})
export class BooksLayout {
  public hideAddButton: boolean = true;
  public hideBackButton: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.hideAddButton =
          url.indexOf('add') !== -1 || url.indexOf('update') !== -1;
        this.hideBackButton = url.endsWith('books') ? true : false;
      }
    });
  }
}
