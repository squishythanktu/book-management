import { NgModule } from '@angular/core';
import { CategoryItemOptionsComponent } from './category-item-options.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogModule } from 'src/app/share/components/confirm-dialog/confirm-dialog.component.module';

@NgModule({
  declarations: [CategoryItemOptionsComponent],
  imports: [
    MatIconModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    ConfirmDialogModule,
  ],
  exports: [CategoryItemOptionsComponent],
})
export class CategoryItemOptionsModule {}
