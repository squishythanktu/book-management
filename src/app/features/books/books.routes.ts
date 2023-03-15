import { BookDetailComponent } from './book-detail/book-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BooksComponent } from './books.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: BookListComponent },
      { path: 'new', component: BookUpdateComponent },
      {
        path: ':id',
        component: BookDetailComponent,
      },
      {
        path: ':id/update',
        component: BookUpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
