import { AppRoutingModule } from './../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { CategoriesModule } from './categories/categories.module';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';
import { SignupModule } from './signup/signup.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthorsModule,
    BooksModule,
    CategoriesModule,
    LoginModule,
    SignupModule,
    UsersModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,

  ],
})
export class FeaturesModule {}
