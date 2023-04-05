import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AuthorDetailComponent } from './pages/author-detail/author-detail.component';
import { AuthorListComponent } from './pages/author-list/author-list.component';
import { AuthorUpdateComponent } from './pages/author-update/author-update.component';
import { AuthorResolverService } from './services/author-resolver.service';
import { AuthorsLayout } from './layouts/authors.layout';

const routes: Routes = [
  {
    path: 'authors',
    component: AuthorsLayout,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: AuthorListComponent },
      { path: 'add', component: AuthorUpdateComponent },
      {
        path: ':id',
        component: AuthorDetailComponent,
        resolve: {
          authors: AuthorResolverService,
        },
      },
      {
        path: ':id/update',
        component: AuthorUpdateComponent,
        resolve: {
          authors: AuthorResolverService,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsRoutingModule {}
