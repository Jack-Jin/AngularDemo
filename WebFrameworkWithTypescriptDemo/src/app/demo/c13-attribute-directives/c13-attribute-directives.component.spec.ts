import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13AttributeDirectivesComponent } from './c13-attribute-directives.component';

describe('C13AttributeDirectivesComponent', () => {
  let component: C13AttributeDirectivesComponent;
  let fixture: ComponentFixture<C13AttributeDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13AttributeDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C13AttributeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
