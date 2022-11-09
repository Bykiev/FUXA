import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { AppService } from '../_services/app.service';
import { ProjectService } from '../_services/project.service';
import { ResClientService } from '../_services/rcgi/resclient.service';
import { ResDemoService } from '../_services/rcgi/resdemo.service';
import { ResWebApiService } from '../_services/rcgi/reswebapi.service';
import { SettingsService } from '../_services/settings.service';

import {FuxaViewComponent} from './fuxa-view.component';

describe('FuxaViewComponent', () => {
  let component: FuxaViewComponent;
  let fixture: ComponentFixture<FuxaViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FuxaViewComponent],
      imports: [
        HttpClientTestingModule,
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
    fixture = TestBed.createComponent(FuxaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
