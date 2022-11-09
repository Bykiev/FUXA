/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeviceWebapiPropertyDialogComponent } from './device-webapi-property-dialog.component';
import { SettingsService } from '../../../_services/settings.service';
import { ResWebApiService } from '../../../_services/rcgi/reswebapi.service';
import { ResDemoService } from '../../../_services/rcgi/resdemo.service';
import { ResClientService } from '../../../_services/rcgi/resclient.service';
import { ProjectService } from '../../../_services/project.service';
import { AppService } from '../../../_services/app.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { HmiService } from '../../../_services/hmi.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DeviceWebapiPropertyDialogComponent', () => {
  let component: DeviceWebapiPropertyDialogComponent;
  let fixture: ComponentFixture<DeviceWebapiPropertyDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceWebapiPropertyDialogComponent ],
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [
        AppService,
        HmiService,
        ProjectService,
        ResClientService,
        ResDemoService,
        ResWebApiService,
        SettingsService,
        {
          provide: MatDialogRef,
          useValue: {}
        },
        {
            provide: MAT_DIALOG_DATA,
            useValue: {}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceWebapiPropertyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
