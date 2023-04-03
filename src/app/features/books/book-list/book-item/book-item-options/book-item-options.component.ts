import { BooksApiService } from './../../../books.api.service';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, pipe } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/share/components/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-item-options',
  templateUrl: './book-item-options.component.html',
  styleUrls: ['./book-item-options.component.scss'],
})
export class BookItemOptionsComponent {
  @Input() index: number;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private booksApiService: BooksApiService
  ) {}

  public openConfirmDeleteDialog(title: string, message: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: title,
        message: message,
      },
      height: '200px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult.result && dialogResult.result === true) {
        let books$: Observable<void>;
        books$ = this.booksApiService.deleteBook(this.index);
        books$.subscribe();
      }
      this.router.navigate(['/books']);
    });
  }
}
