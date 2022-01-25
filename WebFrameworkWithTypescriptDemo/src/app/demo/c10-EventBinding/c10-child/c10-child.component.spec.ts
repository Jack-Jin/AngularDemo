import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C10ChildComponent } from './c10-child.component';

describe('C10ChildComponent', () => {
  let component: C10ChildComponent;
  let fixture: ComponentFixture<C10ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C10ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C10ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
