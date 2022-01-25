import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C0301ChildComponent } from './c0301-child.component';

describe('C0301ChildComponent', () => {
  let component: C0301ChildComponent;
  let fixture: ComponentFixture<C0301ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C0301ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C0301ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
