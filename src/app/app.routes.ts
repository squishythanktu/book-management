import { SignUpGuard } from './core/guards/signup.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { SignupComponent } from './features/signup/signup.component';
import { BookGuard } from './core/guards/book.guard';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent, canActivate: [BookGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [BookGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
