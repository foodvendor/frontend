import { TestBed } from '@angular/core/testing';

import { TodaysMenuService } from './todays-menu.service';

describe('TodaysMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodaysMenuService = TestBed.get(TodaysMenuService);
    expect(service).toBeTruthy();
  });
});
