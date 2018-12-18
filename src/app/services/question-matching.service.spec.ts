import { TestBed } from '@angular/core/testing';

import { QuestionMatchingService } from './question-matching.service';

describe('QuestionMatchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionMatchingService = TestBed.get(QuestionMatchingService);
    expect(service).toBeTruthy();
  });
});
