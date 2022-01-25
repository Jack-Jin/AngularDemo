import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C05ChildComponent } from './c05-child.component';

describe('C05ChildComponent', () => {
  let component: C05ChildComponent;
  let fixture: ComponentFixture<C05ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C05ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C05ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
