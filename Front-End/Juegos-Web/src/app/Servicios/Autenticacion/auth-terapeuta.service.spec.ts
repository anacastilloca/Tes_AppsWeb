import { TestBed, inject } from '@angular/core/testing';

import { AuthTerapeutaService } from './auth-terapeuta.service';

describe('AuthTerapeutaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthTerapeutaService]
    });
  });

  it('should be created', inject([AuthTerapeutaService], (service: AuthTerapeutaService) => {
    expect(service).toBeTruthy();
  }));
});
