import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthGuard } from 'src/app/core/guards/isAuth.guard';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [IsAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
