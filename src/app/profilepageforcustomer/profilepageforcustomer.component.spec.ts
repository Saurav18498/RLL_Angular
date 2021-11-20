import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepageforcustomerComponent } from './profilepageforcustomer.component';

describe('ProfilepageforcustomerComponent', () => {
  let component: ProfilepageforcustomerComponent;
  let fixture: ComponentFixture<ProfilepageforcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilepageforcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilepageforcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
