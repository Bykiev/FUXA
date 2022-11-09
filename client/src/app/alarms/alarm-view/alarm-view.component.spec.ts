/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlarmViewComponent } from './alarm-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { HmiService } from '../../_services/hmi.service';
import { ResClientService } from '../../_services/rcgi/resclient.service';
import { ResDemoService } from '../../_services/rcgi/resdemo.service';
import { ResWebApiService } from '../../_services/rcgi/reswebapi.service';
import { SettingsService } from '../../_services/settings.service';
import { ProjectService } from '../../_services/project.service';
import { AppService } from '../../_services/app.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('AlarmViewComponent', () => {
  let component: AlarmViewComponent;
  let fixture: ComponentFixture<AlarmViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmViewComponent ],
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
        SettingsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
