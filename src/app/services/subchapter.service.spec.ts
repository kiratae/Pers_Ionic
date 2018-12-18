import { TestBed } from '@angular/core/testing';

import { SubchapterService } from './subchapter.service';

describe('SubchapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubchapterService = TestBed.get(SubchapterService);
    expect(service).toBeTruthy();
  });
});
