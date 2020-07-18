import { TestBed } from '@angular/core/testing';

import { ManEmpRegistrationService } from './man-emp-registration.service';

describe('ManEmpRegistrationService', () => {
  let service: ManEmpRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManEmpRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
