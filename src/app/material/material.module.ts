import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  exports: [
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
