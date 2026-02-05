import { TestBed } from '@angular/core/testing';

import { ControlFinanceService } from './control-finance.service';

describe('ControlFinanceService', () => {
  let service: ControlFinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlFinanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
