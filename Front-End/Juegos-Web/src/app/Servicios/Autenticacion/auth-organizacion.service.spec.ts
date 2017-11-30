import { TestBed, inject } from '@angular/core/testing';

import { AuthOrganizacionService } from './auth-organizacion.service';

describe('AuthOrganizacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthOrganizacionService]
    });
  });

  it('should be created', inject([AuthOrganizacionService], (service: AuthOrganizacionService) => {
    expect(service).toBeTruthy();
  }));
});
