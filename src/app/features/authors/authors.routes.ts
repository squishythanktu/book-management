import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthorsComponent } from './authors.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorUpdateComponent } from './author-update/author-update.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';

const routes: Routes = [
  {
    path: 'authors',
    component: AuthorsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: AuthorListComponent },
      { path: 'add', component: AuthorUpdateComponent },
      { path: ':id', component: AuthorDetailComponent },
      { path: ':id/update', component: AuthorUpdateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsRoutingModule {}
