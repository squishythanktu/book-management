import { ConfirmDialogComponent } from 'src/app/share/components/confirm-dialog/confirm-dialog.component';
import { LoadingSpinnerComponent } from './../components/loading-spinner/loading-spinner.component';
import { AlertDialogComponent } from '../components/alert-dialog/alert-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    ConfirmDialogComponent,
    AlertDialogComponent,
  ],
  exports: [
    LoadingSpinnerComponent,
    ConfirmDialogComponent,
    AlertDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ShareModule {}
