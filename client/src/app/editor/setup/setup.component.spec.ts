/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SetupComponent } from './setup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppService } from '../../_services/app.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../../_services/project.service';
import { ResClientService } from '../../_services/rcgi/resclient.service';
import { ResDemoService } from '../../_services/rcgi/resdemo.service';
import { ResWebApiService } from '../../_services/rcgi/reswebapi.service';
import { SettingsService } from '../../_services/settings.service';

describe('SetupComponent', () => {
  let component: SetupComponent;
  let fixture: ComponentFixture<SetupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupComponent ],
      imports: [ 
        HttpClientTestingModule,
        MatDialogModule,
        RouterTestingModule,
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
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
