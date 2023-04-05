import { NgModule } from '@angular/core';
import { AuthorItemOptionsComponent } from './author-item-options.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [AuthorItemOptionsComponent],
  imports: [MatIconModule, MatMenuModule, RouterModule, MatButtonModule],
  exports: [AuthorItemOptionsComponent],
})
export class AuthorItemOptionsModule {}
