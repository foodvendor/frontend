import { TestBed } from '@angular/core/testing';

import { HardcodedAuthServiceService } from './hardcoded-auth-service.service';

describe('HardcodedAuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedAuthServiceService = TestBed.get(HardcodedAuthServiceService);
    expect(service).toBeTruthy();
  });
});
