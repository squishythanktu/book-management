import { NgModule } from '@angular/core';
import { AuthorItemOptionsComponent } from './author-item-options.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AuthorItemOptionsComponent],
  imports: [MatIconModule, MatMenuModule, RouterModule],
  exports: [AuthorItemOptionsComponent],
})
export class AuthorItemOptionsModule {}
