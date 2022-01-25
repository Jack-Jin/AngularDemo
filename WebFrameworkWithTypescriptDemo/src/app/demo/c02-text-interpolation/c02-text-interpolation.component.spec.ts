import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02TextInterpolationComponent } from './c02-text-interpolation.component';

describe('C02TextInterpolationComponent', () => {
  let component: C02TextInterpolationComponent;
  let fixture: ComponentFixture<C02TextInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02TextInterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C02TextInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
