import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12DirectivesComponent } from './c12-directives.component';

describe('C12DirectivesComponent', () => {
  let component: C12DirectivesComponent;
  let fixture: ComponentFixture<C12DirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12DirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C12DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
