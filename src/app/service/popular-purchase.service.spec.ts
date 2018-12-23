import { TestBed } from '@angular/core/testing';

import { PopularPurchaseService } from './popular-purchase.service';

describe('PopularPurchaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopularPurchaseService = TestBed.get(PopularPurchaseService);
    expect(service).toBeTruthy();
  });
});
