import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BooksComponent } from './books.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookUpdateComponent } from './pages/book-update/book-update.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { BookResolverService } from './pages/book-update/book-resolver.service';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    canActivate: [AuthGuard],

    children: [
      { path: '', component: BookListComponent, pathMatch: 'full' },
      { path: 'add', component: BookUpdateComponent },
      {
        path: ':id',
        component: BookDetailComponent,
        resolve: {
          books: BookResolverService,
        },
      },
      {
        path: ':id/update',
        component: BookUpdateComponent,
        resolve: {
          books: BookResolverService,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
