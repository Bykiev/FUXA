/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ScriptService } from './script.service';

describe('Service: Script', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScriptService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([ScriptService], (service: ScriptService) => {
    expect(service).toBeTruthy();
  }));
});
