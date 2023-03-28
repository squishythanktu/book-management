import { Component, EventEmitter, Output } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
  @Output() confirm = new EventEmitter<boolean>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string },
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  public onConfirm(): void {
    this.dialogRef.close({ result: true });
  }

  public onCancel(): void {
    this.dialogRef.close({ result: false });
  }
}
