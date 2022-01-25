import { TestBed } from '@angular/core/testing';

import { C20DataService } from './c20-data.service';

describe('C20DataService', () => {
  let service: C20DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C20DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
