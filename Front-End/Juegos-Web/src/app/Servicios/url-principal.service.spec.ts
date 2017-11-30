import { TestBed, inject } from '@angular/core/testing';

import { UrlPrincipalService } from './url-principal.service';

describe('UrlPrincipalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlPrincipalService]
    });
  });

  it('should be created', inject([UrlPrincipalService], (service: UrlPrincipalService) => {
    expect(service).toBeTruthy();
  }));
});
