import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C11ParentComponent } from './c11-parent.component';

describe('C11ParentComponent', () => {
  let component: C11ParentComponent;
  let fixture: ComponentFixture<C11ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C11ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C11ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
