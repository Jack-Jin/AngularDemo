import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C06TemplateStatementsComponent } from './c06-template-statements.component';

describe('C06TemplateStatementsComponent', () => {
  let component: C06TemplateStatementsComponent;
  let fixture: ComponentFixture<C06TemplateStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C06TemplateStatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C06TemplateStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
