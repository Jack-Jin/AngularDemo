import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C0701PipesComponent } from './c0701-pipes.component';

describe('C0701PipesComponent', () => {
  let component: C0701PipesComponent;
  let fixture: ComponentFixture<C0701PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C0701PipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C0701PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
