import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemOptionsModule } from './../book-item-options/book-item-options.component.module';
import { BookItemComponent } from './book-item.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BookItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    BookItemOptionsModule,
    RouterModule,
    MatIconModule,
  ],
  exports: [BookItemComponent],
})
export class BookItemModule {}
