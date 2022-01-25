import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C16ChildAComponent } from './c16-child-a.component';

describe('C16ChildAComponent', () => {
  let component: C16ChildAComponent;
  let fixture: ComponentFixture<C16ChildAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C16ChildAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C16ChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
