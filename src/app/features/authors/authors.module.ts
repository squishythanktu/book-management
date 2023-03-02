import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthorsComponent } from './authors.component';
import { AuthorsRoutingModule } from './authors-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
    declarations: [AuthorsComponent],
    imports: [CommonModule, ReactiveFormsModule, AuthorsRoutingModule, MaterialModule]

})
export class AuthorsModule {

}