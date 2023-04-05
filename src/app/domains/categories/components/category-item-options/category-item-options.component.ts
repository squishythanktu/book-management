import { CategoriesApiService } from 'src/app/domains/categories/services/categories.api.service';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/share/components/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-item-options',
  templateUrl: './category-item-options.component.html',
  styleUrls: ['./category-item-options.component.scss'],
})
export class CategoryItemOptionsComponent {
  @Input() index: number;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private categoriesApiService: CategoriesApiService
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
        let categories$: Observable<void>;
        categories$ = this.categoriesApiService.deleteCategory(this.index);
        categories$.subscribe();
      }
      this.router.navigate(['/categories']).then(() => {
        window.location.reload();
      });
    });
  }
}
