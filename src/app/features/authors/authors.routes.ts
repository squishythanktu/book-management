import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthorsComponent } from './authors.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
    {path: 'authors', component: AuthorsComponent, canActivate: [AuthGuard] },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorsRoutingModule {

}