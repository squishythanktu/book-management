import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthorDetailComponent } from './author-detail.component';
import { MatTableModule } from '@angular/material/table';
import { BookItemModule } from 'src/app/domains/books/components/book-item/book-item.component.module';
@NgModule({
  declarations: [AuthorDetailComponent],
  imports: [BrowserModule, MatTableModule, BookItemModule],
})
export class AuthorDetailModule {}
