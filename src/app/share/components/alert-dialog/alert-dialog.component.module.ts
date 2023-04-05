import { NgModule } from '@angular/core';
import { AlertDialogComponent } from './alert-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AlertDialogComponent],
  imports: [MatDialogModule, MatButtonModule],
  exports: [AlertDialogComponent],
})
export class AlertDialogModule {}
