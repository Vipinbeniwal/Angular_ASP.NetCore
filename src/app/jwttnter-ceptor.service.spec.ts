import { TestBed } from '@angular/core/testing';

import { JWTTnterCeptorService } from './jwttnter-ceptor.service';

describe('JWTTnterCeptorService', () => {
  let service: JWTTnterCeptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JWTTnterCeptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
