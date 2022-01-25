import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C16MainComponent } from './c16-main.component';

describe('C16MainComponent', () => {
  let component: C16MainComponent;
  let fixture: ComponentFixture<C16MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C16MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C16MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
