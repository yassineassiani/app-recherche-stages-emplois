import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { forGuard } from './for.guard';

describe('forGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => forGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
