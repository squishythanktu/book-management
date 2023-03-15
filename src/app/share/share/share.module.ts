import { LoadingSpinnerComponent } from './../components/loading-spinner/loading-spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import {MatFileUploadModule } from '@angular/material/file'
@NgModule({
  declarations: [LoadingSpinnerComponent],
  exports: [LoadingSpinnerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class ShareModule {}
