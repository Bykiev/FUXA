/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopicPropertyComponent } from './topic-property.component';
import { HmiService } from '../../_services/hmi.service';
import { ProjectService } from '../../_services/project.service';
import { ResClientService } from '../../_services/rcgi/resclient.service';
import { ResDemoService } from '../../_services/rcgi/resdemo.service';
import { ResWebApiService } from '../../_services/rcgi/reswebapi.service';
import { SettingsService } from '../../_services/settings.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppService } from '../../_services/app.service';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('TopicPropertyComponent', () => {
  let component: TopicPropertyComponent;
  let fixture: ComponentFixture<TopicPropertyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicPropertyComponent ],
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
    fixture = TestBed.createComponent(TopicPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
