import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C10ParentComponent } from './c10-parent.component';

describe('C10ParentComponent', () => {
  let component: C10ParentComponent;
  let fixture: ComponentFixture<C10ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C10ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C10ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
