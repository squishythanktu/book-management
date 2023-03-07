import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
    {path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard] },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class CategoriesRoutingModule {

}