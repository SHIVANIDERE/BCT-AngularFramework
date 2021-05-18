import { TestBed } from '@angular/core/testing';

import { DummycartService } from './dummycart.service';

describe('DummycartService', () => {
  let service: DummycartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummycartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
