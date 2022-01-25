import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C16ChildBComponent } from './c16-child-b.component';

describe('C16ChildBComponent', () => {
  let component: C16ChildBComponent;
  let fixture: ComponentFixture<C16ChildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C16ChildBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C16ChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
