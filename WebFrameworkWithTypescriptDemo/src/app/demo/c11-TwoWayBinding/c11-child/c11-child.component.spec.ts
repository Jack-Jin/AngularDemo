import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C11ChildComponent } from './c11-child.component';

describe('C11ChildComponent', () => {
  let component: C11ChildComponent;
  let fixture: ComponentFixture<C11ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C11ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C11ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
