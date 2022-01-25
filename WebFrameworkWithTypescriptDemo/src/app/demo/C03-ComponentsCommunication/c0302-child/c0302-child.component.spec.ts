import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C0302ChildComponent } from './c0302-child.component';

describe('C0302ChildComponent', () => {
  let component: C0302ChildComponent;
  let fixture: ComponentFixture<C0302ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C0302ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C0302ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
