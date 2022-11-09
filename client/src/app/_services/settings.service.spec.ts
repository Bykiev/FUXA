/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { SettingsService } from './settings.service';

describe('Service: Settings', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsService],
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ]
    });
  });

  it('should ...', inject([SettingsService], (service: SettingsService) => {
    expect(service).toBeTruthy();
  }));
});
