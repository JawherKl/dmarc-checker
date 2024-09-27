import { TestBed } from '@angular/core/testing';

import { DmarcService } from './dmarc.service';

describe('DmarcService', () => {
  let service: DmarcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmarcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
