import { TestBed, inject } from '@angular/core/testing';

import { EmpInfoService } from './emp-info.service';

describe('EmpInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpInfoService]
    });
  });

  it('should be created', inject([EmpInfoService], (service: EmpInfoService) => {
    expect(service).toBeTruthy();
  }));
});
