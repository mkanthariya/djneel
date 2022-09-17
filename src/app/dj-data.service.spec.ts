import { TestBed } from '@angular/core/testing';

import { DjDataService } from './dj-data.service';

describe('DjDataService', () => {
  let service: DjDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DjDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
