import { AppRoutingModule } from './../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AuthModule } from './auth/auth.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { CategoriesModule } from './categories/categories.module';

@NgModule({
  declarations: [
    UsersComponent,
    HeaderComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule,
    AuthorsModule,
    BooksModule,
    CategoriesModule
  ],
  exports: [
    UsersComponent,
    HeaderComponent,
    SideBarComponent,
  ],
})
export class FeaturesModule {}
