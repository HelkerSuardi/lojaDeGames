import { TestBed } from '@angular/core/testing';

import { FaixasEtariasService } from './faixas-etarias.service';

describe('FaixasEtariasService', () => {
  let service: FaixasEtariasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaixasEtariasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
