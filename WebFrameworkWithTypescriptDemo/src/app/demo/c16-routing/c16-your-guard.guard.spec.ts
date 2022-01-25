import { TestBed } from '@angular/core/testing';

import { C16YourGuardGuard } from './c16-your-guard.guard';

describe('C16YourGuardGuard', () => {
  let guard: C16YourGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(C16YourGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
