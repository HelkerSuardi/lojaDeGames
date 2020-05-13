import { TestBed } from '@angular/core/testing';

import { DesensevolvedorasService } from './desensevolvedoras.service';

describe('DesensevolvedorasService', () => {
  let service: DesensevolvedorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesensevolvedorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
