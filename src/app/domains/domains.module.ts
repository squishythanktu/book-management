import { NgModule } from '@angular/core';
import { BooksModule } from './books/books.component.module';
import { AuthorsModule } from './authors/authors.component.module';
import { SignupModule } from './signup/signup.component.module';
import { AuthModule } from './auth/auth.component.module';
import { CategoriesModule } from './categories/categories.component.module';
import { UsersModule } from './users/users.component.module';

@NgModule({
  declarations: [],
  imports: [
    BooksModule,
    AuthorsModule,
    SignupModule,
    AuthModule,
    CategoriesModule,
    UsersModule,
  ],
  exports: [],
})
export class DomainsModule {}
