import { AuthorListModule } from './pages/author-list/author-list.component.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthorsRoutingModule } from './authors.routes';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthorDetailModule } from './pages/author-detail/author-detail.component.module';
import { AuthorUpdateModule } from './pages/author-update/author-update.component.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthorsLayout } from './layouts/authors.layout';

@NgModule({
  declarations: [AuthorsLayout],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthorsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    AuthorDetailModule,
    AuthorListModule,
    AuthorUpdateModule,
    MatButtonModule,
  ],
  exports: [AuthorsLayout],
})
export class AuthorsModule {}
