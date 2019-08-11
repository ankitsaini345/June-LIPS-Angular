import { TestBed } from '@angular/core/testing';

import { NewEmployeeService } from './new-employee.service';

describe('NewEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewEmployeeService = TestBed.get(NewEmployeeService);
    expect(service).toBeTruthy();
  });
});
