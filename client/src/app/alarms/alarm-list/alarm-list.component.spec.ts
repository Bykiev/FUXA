/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlarmListComponent } from './alarm-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProjectService } from '../../_services/project.service';
import { ResWebApiService } from '../../_services/rcgi/reswebapi.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResDemoService } from '../../_services/rcgi/resdemo.service';
import { ResClientService } from '../../_services/rcgi/resclient.service';
import { AppService } from '../../_services/app.service';
import { SettingsService } from '../../_services/settings.service';
import { ToastrModule } from 'ngx-toastr';

describe('AlarmListComponent', () => {
  let component: AlarmListComponent;
  let fixture: ComponentFixture<AlarmListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmListComponent ],
      imports: [ 
        HttpClientTestingModule,
        MatDialogModule,
        TranslateModule.forRoot(),
        ToastrModule.forRoot()
      ],
      providers: [
        AppService,
        ProjectService,
        ResWebApiService,
        ResClientService,
        ResDemoService,
        SettingsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
