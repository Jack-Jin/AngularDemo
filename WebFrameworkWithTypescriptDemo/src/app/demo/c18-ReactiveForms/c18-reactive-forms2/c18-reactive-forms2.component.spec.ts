import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C18ReactiveForms2Component } from './c18-reactive-forms2.component';

describe('C18ReactiveForms2Component', () => {
  let component: C18ReactiveForms2Component;
  let fixture: ComponentFixture<C18ReactiveForms2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C18ReactiveForms2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C18ReactiveForms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
