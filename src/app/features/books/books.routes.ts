import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BooksComponent } from './books.component';
import { IsAuthGuard } from 'src/app/core/guards/isAuth.guard';

const routes: Routes = [
  { path: 'books', component: BooksComponent, canActivate: [IsAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
