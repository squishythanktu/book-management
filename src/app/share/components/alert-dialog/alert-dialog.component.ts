import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
})
export class AlertDialogComponent {
  @Output() confirm = new EventEmitter<boolean>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string },
    private dialogRef: MatDialogRef<AlertDialogComponent>
  ) {}

  public onConfirm(): void {
    this.dialogRef.close({ result: true });
  }
}
