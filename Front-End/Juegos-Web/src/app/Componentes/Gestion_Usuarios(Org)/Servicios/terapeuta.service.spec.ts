import { TestBed, inject } from '@angular/core/testing';

import { TerapeutaService } from './terapeuta.service';

describe('TerapeutaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TerapeutaService]
    });
  });

  it('should be created', inject([TerapeutaService], (service: TerapeutaService) => {
    expect(service).toBeTruthy();
  }));
});
