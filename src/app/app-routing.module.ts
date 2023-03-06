import { SignUpGuard } from './core/guards/signup.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { SignupComponent } from './features/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', redirectTo: '/books'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
