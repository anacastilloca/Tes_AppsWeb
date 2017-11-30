import { TestBed, inject } from '@angular/core/testing';

import { AuthEstudianteService } from './auth-estudiante.service';

describe('AuthEstudianteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthEstudianteService]
    });
  });

  it('should be created', inject([AuthEstudianteService], (service: AuthEstudianteService) => {
    expect(service).toBeTruthy();
  }));
});
