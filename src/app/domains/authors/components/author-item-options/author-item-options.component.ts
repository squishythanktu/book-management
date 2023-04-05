import { AlertDialogComponent } from '../../../../share/components/alert-dialog/alert-dialog.component';
import { AuthorsApiService } from '../../services/authors.api.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/share/components/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-author-item-options',
  templateUrl: './author-item-options.component.html',
  styleUrls: ['./author-item-options.component.scss'],
})
export class AuthorItemOptionsComponent {
  @Input() id: number;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authorsApiService: AuthorsApiService
  ) {}

  public openConfirmDeleteDialog(title: string, message: string) {
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
        let authors$: Observable<void>;
        authors$ = this.authorsApiService.deleteAuthor(this.id);
        authors$.subscribe(
          (response: void) => {},
          (error) => {
            if (error.status === 400) {
              const dialogRef = this.dialog.open(AlertDialogComponent, {
                data: {
                  title: 'Error',
                  message: error.error.message,
                },
                height: '200px',
                width: '300px',
              });
            }
          }
        );
      }
      this.router.navigate(['/authors']).then(() => {
        window.location.reload();
      });
    });
  }
}
