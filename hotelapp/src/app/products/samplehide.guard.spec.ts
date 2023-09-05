import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { samplehideGuard } from './samplehide.guard';

describe('samplehideGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => samplehideGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
