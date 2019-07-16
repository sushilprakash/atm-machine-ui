import { TestBed } from '@angular/core/testing';

import { LocatorDetailService } from './locator-detail.service';

describe('LocatorDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocatorDetailService = TestBed.get(LocatorDetailService);
    expect(service).toBeTruthy();
  });
});
