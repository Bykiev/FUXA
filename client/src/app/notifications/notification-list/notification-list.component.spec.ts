/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotificationListComponent } from './notification-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectService } from '../../_services/project.service';
import { ResWebApiService } from '../../_services/rcgi/reswebapi.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResDemoService } from '../../_services/rcgi/resdemo.service';
import { ResClientService } from '../../_services/rcgi/resclient.service';
import { AppService } from '../../_services/app.service';
import { ToastrModule } from 'ngx-toastr';

describe('NotificationListComponent', () => {
  let component: NotificationListComponent;
  let fixture: ComponentFixture<NotificationListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationListComponent ],
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
        ResWebApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
