import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { GaugesManager } from '../gauges/gauges.component';
import { WindowRef } from '../_helpers/windowref';
import { AppService } from '../_services/app.service';
import { AuthService } from '../_services/auth.service';
import { HmiService } from '../_services/hmi.service';
import { ProjectService } from '../_services/project.service';
import { ResClientService } from '../_services/rcgi/resclient.service';
import { ResDemoService } from '../_services/rcgi/resdemo.service';
import { ResWebApiService } from '../_services/rcgi/reswebapi.service';
import { SettingsService } from '../_services/settings.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ 
        HttpClientTestingModule,
        MatDialogModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [ 
        AppService,
        AuthService,
        GaugesManager,
        HmiService,
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
