import { NgModule } from '@angular/core';
import { BookItemOptionsComponent } from './book-item-options.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BookItemOptionsComponent],
  imports: [MatIconModule, MatMenuModule, RouterModule, MatButtonModule],
  exports: [BookItemOptionsComponent],
})
export class BookItemOptionsModule {}
