import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C17TemplateDrivenFormComponent } from './c17-template-driven-form.component';

describe('C17TemplateDrivenFormComponent', () => {
  let component: C17TemplateDrivenFormComponent;
  let fixture: ComponentFixture<C17TemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C17TemplateDrivenFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C17TemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
