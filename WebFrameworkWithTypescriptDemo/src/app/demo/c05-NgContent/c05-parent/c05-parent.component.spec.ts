import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C05ParentComponent } from './c05-parent.component';

describe('C05ParentComponent', () => {
  let component: C05ParentComponent;
  let fixture: ComponentFixture<C05ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C05ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C05ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
