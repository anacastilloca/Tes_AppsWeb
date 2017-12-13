import { TestBed, inject } from '@angular/core/testing';

import { ComunicacionAlternativaService } from './comunicacion-alternativa.service';

describe('ComunicacionAlternativaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComunicacionAlternativaService]
    });
  });

  it('should be created', inject([ComunicacionAlternativaService], (service: ComunicacionAlternativaService) => {
    expect(service).toBeTruthy();
  }));
});
