import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesApiService } from '../../services/categories.api.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss'],
})
export class CategoryUpdateComponent {
  public myForm: FormGroup;
  public id: number;
  public updateMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private categoryApiService: CategoriesApiService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.id != null) {
        this.updateMode = true;
      } else {
        this.updateMode = false;
      }
      this.loadCategoryToForm();
    });
  }
  public loadCategoryToForm(): void {
    let categoryName: string = '';
    let categoryDescription: string = '';
    if (this.updateMode) {
      const category = this.categoriesService.getCategory(this.id);
      categoryName = category.name;
      categoryDescription = category.description;
    }
    this.myForm = new FormGroup({
      name: new FormControl(categoryName, [Validators.required]),
      description: new FormControl(categoryDescription, [Validators.required]),
    });
  }

  public onSubmitCategory(myForm: FormGroup): void {
    let category = { ...myForm.value };
    let category$: Observable<Category>;
    if (this.myForm.valid) {
      if (this.updateMode) {
        category$ = this.categoryApiService.updateCategory(this.id, category);
      } else {
        category$ = this.categoryApiService.addCategory(category);
      }
      category$.subscribe();
      this.router.navigate(['categories']);
    }
  }
}
