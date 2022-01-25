import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C16SecondComponent } from './c16-second.component';

describe('C16SecondComponent', () => {
  let component: C16SecondComponent;
  let fixture: ComponentFixture<C16SecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C16SecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C16SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
