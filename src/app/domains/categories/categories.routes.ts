import { AuthGuard } from './../../core/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoriesLayout } from './layouts/categories.layout';
import { CategoryListComponent } from './pages/category-list/category-list.component';
const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesLayout,
    canActivate: [AuthGuard],
    children: [{ path: '', component: CategoryListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
