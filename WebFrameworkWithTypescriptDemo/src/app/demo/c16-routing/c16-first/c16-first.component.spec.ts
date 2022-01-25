import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C16FirstComponent } from './c16-first.component';

describe('C16FirstComponent', () => {
  let component: C16FirstComponent;
  let fixture: ComponentFixture<C16FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C16FirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C16FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
