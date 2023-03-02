import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthorsComponent } from './authors.component';

const routes: Routes = [
    {path: 'authors', component: AuthorsComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorsRoutingModule {

}