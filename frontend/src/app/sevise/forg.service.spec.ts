import { TestBed } from '@angular/core/testing';

import { ForgService } from './forg.service';

describe('ForgService', () => {
  let service: ForgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
