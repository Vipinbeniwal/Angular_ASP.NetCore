import { TestBed } from '@angular/core/testing';

import { ActivategaurdService } from './activategaurd.service';

describe('ActivategaurdService', () => {
  let service: ActivategaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivategaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
