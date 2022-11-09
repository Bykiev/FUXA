/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewComponent } from './view.component';
import { ProjectService } from '../_services/project.service';
import { ResClientService } from '../_services/rcgi/resclient.service';
import { ResDemoService } from '../_services/rcgi/resdemo.service';
import { ResWebApiService } from '../_services/rcgi/reswebapi.service';
import { SettingsService } from '../_services/settings.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppService } from '../_services/app.service';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { GaugesManager } from '../gauges/gauges.component';
import { WindowRef } from '../_helpers/windowref';
import { HmiService } from '../_services/hmi.service';
import { MatDialogModule } from '@angular/material/dialog';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComponent ],
      imports: [ 
        HttpClientTestingModule,
        MatDialogModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [ 
        AppService,
        HmiService,
        GaugesManager,
        ProjectService,
        ResClientService,
        ResDemoService,
        ResWebApiService,
        SettingsService,
        WindowRef
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
