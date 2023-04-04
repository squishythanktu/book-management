import { NgModule } from '@angular/core';
import { BookDetailComponent } from './book-detail.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [BookDetailComponent],
  imports: [MatTableModule],
  exports: [BookDetailComponent],
})
export class BookDetailModule {}
