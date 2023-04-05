import { AuthGuard } from './../../core/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
