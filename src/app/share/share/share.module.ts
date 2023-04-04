import { AlertDialogComponent } from '../components/alert-dialog/alert-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlertDialogModule } from '../components/alert-dialog/alert-dialog.component.module';
import { HeaderModule } from '../components/header/header.component.module';
import { SideBarModule } from '../components/side-bar/side-bar.component.module';
import { ConfirmDialogModule } from '../components/confirm-dialog/confirm-dialog.component.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatDialogModule,
    // MatButtonModule,
    // MatIconModule,
    AlertDialogModule,
    HeaderModule,
    SideBarModule,
    ConfirmDialogModule,
  ],
  exports: [],
})
export class ShareModule {}
