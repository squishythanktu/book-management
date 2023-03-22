import { AppRoutingModule } from '../app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { SignupModule } from './signup/signup.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ShareModule } from '../share/share/share.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [HeaderComponent, SideBarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthorsModule,
    BooksModule,
    CategoriesModule,
    AuthModule,
    SignupModule,
    UsersModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    ShareModule,
    MatIconModule,
    FormsModule,
  ],
  exports: [HeaderComponent, SideBarComponent],
})
export class FeaturesModule {}
