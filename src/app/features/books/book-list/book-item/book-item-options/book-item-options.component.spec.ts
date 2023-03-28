import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemOptionsComponent } from './book-item-options.component';

describe('BookItemOptionsComponent', () => {
  let component: BookItemOptionsComponent;
  let fixture: ComponentFixture<BookItemOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookItemOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookItemOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
