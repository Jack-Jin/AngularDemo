import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C20HttpClientComponent } from './c20-http-client.component';

describe('C20HttpClientComponent', () => {
  let component: C20HttpClientComponent;
  let fixture: ComponentFixture<C20HttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C20HttpClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C20HttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
