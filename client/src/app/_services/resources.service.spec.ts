/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ResourcesService } from './resources.service';

describe('Service: Resources', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourcesService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([ResourcesService], (service: ResourcesService) => {
    expect(service).toBeTruthy();
  }));
});
