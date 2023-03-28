import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorItemOptionsComponent } from './author-item-options.component';

describe('AuthorItemOptionsComponent', () => {
  let component: AuthorItemOptionsComponent;
  let fixture: ComponentFixture<AuthorItemOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorItemOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorItemOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
