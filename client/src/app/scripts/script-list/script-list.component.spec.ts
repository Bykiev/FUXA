/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScriptListComponent } from './script-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { SettingsService } from '../../_services/settings.service';
import { AppService } from '../../_services/app.service';
import { ResClientService } from '../../_services/rcgi/resclient.service';
import { ProjectService } from '../../_services/project.service';
import { ResDemoService } from '../../_services/rcgi/resdemo.service';
import { ResWebApiService } from '../../_services/rcgi/reswebapi.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('ScriptListComponent', () => {
  let component: ScriptListComponent;
  let fixture: ComponentFixture<ScriptListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptListComponent ],
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
        SettingsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
