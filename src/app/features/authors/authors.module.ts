import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthorsComponent } from './authors.component';
import { AuthorsRoutingModule } from './authors.routes';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorUpdateComponent } from './author-update/author-update.component';
import { AuthorItemComponent } from './author-list/author-item/author-item.component';
@NgModule({
  declarations: [AuthorsComponent, AuthorListComponent, AuthorDetailComponent, AuthorUpdateComponent, AuthorItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthorsRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class AuthorsModule {}
