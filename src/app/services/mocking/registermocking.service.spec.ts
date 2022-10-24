import { TestBed } from '@angular/core/testing';

import { RegistermockingService } from './registermocking.service';

describe('RegistermockingService', () => {
  let service: RegistermockingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistermockingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
