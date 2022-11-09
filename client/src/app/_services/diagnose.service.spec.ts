/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { DiagnoseService } from './diagnose.service';

describe('Service: Diagnose', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiagnoseService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([DiagnoseService], (service: DiagnoseService) => {
    expect(service).toBeTruthy();
  }));
});
