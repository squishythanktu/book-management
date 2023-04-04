import { NgModule } from '@angular/core';
import { AuthorDetailComponent } from './author-detail.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AuthorDetailComponent],
  imports: [MatTableModule],
})
export class AuthorDetailModule {}
