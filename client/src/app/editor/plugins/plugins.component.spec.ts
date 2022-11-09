/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PluginsComponent } from './plugins.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { PluginService } from '../../_services/plugin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { AppService } from '../../_services/app.service';
import { SettingsService } from '../../_services/settings.service';
import { ResWebApiService } from '../../_services/rcgi/reswebapi.service';
import { ResDemoService } from '../../_services/rcgi/resdemo.service';
import { ResClientService } from '../../_services/rcgi/resclient.service';
import { ProjectService } from '../../_services/project.service';

describe('PluginComponent', () => {
  let component: PluginsComponent;
  let fixture: ComponentFixture<PluginsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginsComponent ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [
        AppService,
        PluginService,
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
    fixture = TestBed.createComponent(PluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
