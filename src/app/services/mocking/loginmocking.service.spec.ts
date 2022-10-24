import { TestBed } from '@angular/core/testing';

import { LoginmockingService } from './loginmocking.service';

describe('LoginmockingService', () => {
  let service: LoginmockingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginmockingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
