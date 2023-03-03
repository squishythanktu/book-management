import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { SideBarComponent } from './features/side-bar/side-bar.component';
import { SignupComponent } from './features/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'side-bar', component: SideBarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
