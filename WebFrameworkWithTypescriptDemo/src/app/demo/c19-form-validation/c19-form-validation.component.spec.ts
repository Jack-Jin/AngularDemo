import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C19FormValidationComponent } from './c19-form-validation.component';

describe('C19FormValidationComponent', () => {
  let component: C19FormValidationComponent;
  let fixture: ComponentFixture<C19FormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C19FormValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C19FormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
