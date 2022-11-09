/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChartConfigComponent } from './chart-config.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { AppService } from '../../_services/app.service';
import { ProjectService } from '../../_services/project.service';
import { ResClientService } from '../../_services/rcgi/resclient.service';
import { ResWebApiService } from '../../_services/rcgi/reswebapi.service';
import { ResDemoService } from '../../_services/rcgi/resdemo.service';
import { SettingsService } from '../../_services/settings.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('ChartConfigComponent', () => {
  let component: ChartConfigComponent;
  let fixture: ComponentFixture<ChartConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartConfigComponent ],
      imports: [ 
        HttpClientTestingModule,
        MatDialogModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [
        AppService,
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
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
