import { NgModule } from '@angular/core';
import { CategoryItemComponent } from './category-item.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CategoryItemOptionsModule } from '../category-item-options/category-item-options.component.module';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [CategoryItemComponent],
  imports: [
    MatCardModule,
    RouterModule,
    CategoryItemOptionsModule,
    MatIconModule,
  ],
  exports: [CategoryItemComponent],
})
export class CategoryItemModule {}
