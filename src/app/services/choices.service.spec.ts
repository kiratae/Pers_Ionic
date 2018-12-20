import { TestBed } from '@angular/core/testing';

import { ChoicesService } from './choices.service';

describe('ChoicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChoicesService = TestBed.get(ChoicesService);
    expect(service).toBeTruthy();
  });
});
