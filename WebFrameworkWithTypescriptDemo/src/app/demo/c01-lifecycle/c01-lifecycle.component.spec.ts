import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C01LifecycleComponent } from './c01-lifecycle.component';

describe('C01LifecycleComponent', () => {
  let component: C01LifecycleComponent;
  let fixture: ComponentFixture<C01LifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C01LifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C01LifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
