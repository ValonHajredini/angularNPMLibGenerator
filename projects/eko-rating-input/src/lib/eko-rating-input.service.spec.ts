import { TestBed } from '@angular/core/testing';

import { EkoRatingInputService } from './eko-rating-input.service';

describe('EkoRatingInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EkoRatingInputService = TestBed.get(EkoRatingInputService);
    expect(service).toBeTruthy();
  });
});
