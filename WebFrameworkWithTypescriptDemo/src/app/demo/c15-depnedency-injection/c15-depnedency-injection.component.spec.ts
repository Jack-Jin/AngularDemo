import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C15DepnedencyInjectionComponent } from './c15-depnedency-injection.component';

describe('C15DepnedencyInjectionComponent', () => {
  let component: C15DepnedencyInjectionComponent;
  let fixture: ComponentFixture<C15DepnedencyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C15DepnedencyInjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C15DepnedencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
