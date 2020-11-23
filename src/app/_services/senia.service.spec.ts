import { TestBed } from '@angular/core/testing';

import { SeniaService } from './senia.service';

describe('SeniaService', () => {
  let service: SeniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
