import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';

@NgModule({
    declarations: [CategoriesComponent],
    imports: [CommonModule, ReactiveFormsModule, CategoriesRoutingModule, MaterialModule]
})
export class CategoriesModule {

}