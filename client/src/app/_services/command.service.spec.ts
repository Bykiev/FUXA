/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { CommandService } from './command.service';

describe('Service: Command', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommandService],
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ]
    });
  });

  it('should ...', inject([CommandService], (service: CommandService) => {
    expect(service).toBeTruthy();
  }));
});
