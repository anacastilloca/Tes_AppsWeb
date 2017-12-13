import { TestBed, inject } from '@angular/core/testing';

import { SecuenciaAccionesService } from './secuencia-acciones.service';

describe('SecuenciaAccionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecuenciaAccionesService]
    });
  });

  it('should be created', inject([SecuenciaAccionesService], (service: SecuenciaAccionesService) => {
    expect(service).toBeTruthy();
  }));
});
