import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14StructuralDirectivesComponent } from './c14-structural-directives.component';

describe('C14StructuralDirectivesComponent', () => {
  let component: C14StructuralDirectivesComponent;
  let fixture: ComponentFixture<C14StructuralDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14StructuralDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C14StructuralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
