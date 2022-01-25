import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C09AttributeClassStyleComponent } from './c09-attribute-class-style.component';

describe('C09AttributeClassStyleComponent', () => {
  let component: C09AttributeClassStyleComponent;
  let fixture: ComponentFixture<C09AttributeClassStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C09AttributeClassStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C09AttributeClassStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
