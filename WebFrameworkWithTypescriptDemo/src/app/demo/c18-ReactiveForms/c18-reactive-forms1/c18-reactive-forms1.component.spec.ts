import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C18ReactiveForms1Component } from './c18-reactive-forms1.component';

describe('C18ReactiveForms1Component', () => {
  let component: C18ReactiveForms1Component;
  let fixture: ComponentFixture<C18ReactiveForms1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C18ReactiveForms1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C18ReactiveForms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
