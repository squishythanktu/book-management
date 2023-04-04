import { AuthorListModule } from './pages/author-list/author-list.component.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthorsComponent } from './authors.component';
import { AuthorsRoutingModule } from './authors.routes';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthorDetailModule } from './pages/author-detail/author-detail.component.module';
import { AuthorUpdateModule } from './pages/author-update/author-update.component.module';
@NgModule({
  declarations: [AuthorsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthorsRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    AuthorDetailModule,
    AuthorListModule,
    AuthorUpdateModule,
  ],
  exports: [AuthorsComponent],
})
export class AuthorsModule {}
