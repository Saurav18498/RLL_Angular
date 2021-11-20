import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypageforcustomerComponent } from './displaypageforcustomer.component';

describe('DisplaypageforcustomerComponent', () => {
  let component: DisplaypageforcustomerComponent;
  let fixture: ComponentFixture<DisplaypageforcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaypageforcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypageforcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
