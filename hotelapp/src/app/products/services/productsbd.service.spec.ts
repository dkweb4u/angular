import { TestBed } from '@angular/core/testing';

import { ProductsbdService } from './productsbd.service';

describe('ProductsbdService', () => {
  let service: ProductsbdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsbdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
