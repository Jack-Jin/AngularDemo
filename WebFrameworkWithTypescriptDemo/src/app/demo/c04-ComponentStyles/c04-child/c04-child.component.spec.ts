import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04ChildComponent } from './c04-child.component';

describe('C04ChildComponent', () => {
  let component: C04ChildComponent;
  let fixture: ComponentFixture<C04ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C04ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
