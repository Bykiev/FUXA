import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { AppService } from '../../_services/app.service';
import { HmiService } from '../../_services/hmi.service';
import { ProjectService } from '../../_services/project.service';
import { ResClientService } from '../../_services/rcgi/resclient.service';
import { ResDemoService } from '../../_services/rcgi/resdemo.service';
import { ResWebApiService } from '../../_services/rcgi/reswebapi.service';
import { SettingsService } from '../../_services/settings.service';

import { TagPropertyComponent } from './tag-property.component';

describe('TagPropertyComponent', () => {
  let component: TagPropertyComponent;
  let fixture: ComponentFixture<TagPropertyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TagPropertyComponent ],
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
    fixture = TestBed.createComponent(TagPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
