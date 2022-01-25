import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C0302ParentComponent } from './c0302-parent.component';

describe('C0302ParentComponent', () => {
  let component: C0302ParentComponent;
  let fixture: ComponentFixture<C0302ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C0302ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C0302ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
