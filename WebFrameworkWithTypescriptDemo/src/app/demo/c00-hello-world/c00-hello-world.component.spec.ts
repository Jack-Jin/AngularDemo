import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C00HelloWorldComponent } from './c00-hello-world.component';

describe('C00HelloWorldComponent', () => {
  let component: C00HelloWorldComponent;
  let fixture: ComponentFixture<C00HelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C00HelloWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C00HelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
