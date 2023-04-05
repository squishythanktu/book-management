import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AuthorItemModule } from '../../components/author-item/author-item.component.module';

@NgModule({
  declarations: [AuthorListComponent],
  imports: [CommonModule, MatPaginatorModule, AuthorItemModule],
  exports: [AuthorListComponent],
})
export class AuthorListModule {}
