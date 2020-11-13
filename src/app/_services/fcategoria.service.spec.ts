import { TestBed } from '@angular/core/testing';

import { FcategoriaService } from './fcategoria.service';

describe('FcategoriaService', () => {
  let service: FcategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FcategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
