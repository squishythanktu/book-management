import { BookGuard } from './core/guards/book.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './domains/auth/auth.component';
import { SignupComponent } from './domains/signup/signup.component';

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
