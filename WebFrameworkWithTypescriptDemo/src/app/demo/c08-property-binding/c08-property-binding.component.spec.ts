import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C08PropertyBindingComponent } from './c08-property-binding.component';

describe('C08PropertyBindingComponent', () => {
  let component: C08PropertyBindingComponent;
  let fixture: ComponentFixture<C08PropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C08PropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C08PropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
