import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04ParentComponent } from './c04-parent.component';

describe('C04ParentComponent', () => {
  let component: C04ParentComponent;
  let fixture: ComponentFixture<C04ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C04ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
