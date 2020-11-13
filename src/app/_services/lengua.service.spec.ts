import { TestBed } from '@angular/core/testing';

import { LenguaService } from './lengua.service';

describe('LenguaService', () => {
  let service: LenguaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LenguaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
