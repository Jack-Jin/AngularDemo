import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C0301ParentComponent } from './c0301-parent.component';

describe('C0301ParentComponent', () => {
  let component: C0301ParentComponent;
  let fixture: ComponentFixture<C0301ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C0301ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C0301ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
