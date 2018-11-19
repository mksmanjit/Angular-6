import { TestBed, inject } from '@angular/core/testing';

import { EmailDistributionService } from './email-distribution.service';

describe('EmailDistributionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailDistributionService]
    });
  });

  it('should be created', inject([EmailDistributionService], (service: EmailDistributionService) => {
    expect(service).toBeTruthy();
  }));
});
