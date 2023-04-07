import { AuthGuard } from './../../core/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoriesLayout } from './layouts/categories.layout';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryUpdateComponent } from './pages/category-update/category-update.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { CategoryResolverService } from './services/category-resolver.service';
const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesLayout,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CategoryListComponent },
      { path: 'add', component: CategoryUpdateComponent },
      {
        path: ':id',
        component: CategoryDetailComponent,
        resolve: {
          categories: CategoryResolverService,
        },
      },

      {
        path: ':id/update',
        component: CategoryUpdateComponent,
        resolve: {
          categories: CategoryResolverService,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
