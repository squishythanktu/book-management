import { NgModule } from '@angular/core';
import { AuthorItemComponent } from './author-item.component';
import { MatCardModule } from '@angular/material/card';
import { AuthorItemOptionsModule } from '../author-item-options/author-item-options.component.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthorItemComponent],
  imports: [MatCardModule, AuthorItemOptionsModule, RouterModule],
  exports: [AuthorItemComponent],
})
export class AuthorItemModule {}
