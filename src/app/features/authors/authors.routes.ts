import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthorsComponent } from './authors.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorUpdateComponent } from './author-update/author-update.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorResolverService } from './author-update/author-resolver.service';

const routes: Routes = [
  {
    path: 'authors',
    component: AuthorsComponent,
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
