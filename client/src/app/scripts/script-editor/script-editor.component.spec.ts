/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScriptEditorComponent } from './script-editor.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { HmiService } from '../../_services/hmi.service';
import { ProjectService } from '../../_services/project.service';
import { ResWebApiService } from '../../_services/rcgi/reswebapi.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResDemoService } from '../../_services/rcgi/resdemo.service';
import { ResClientService } from '../../_services/rcgi/resclient.service';
import { AppService } from '../../_services/app.service';
import { SettingsService } from '../../_services/settings.service';
import { ToastrModule } from 'ngx-toastr';

describe('ScriptEditorComponent', () => {
  let component: ScriptEditorComponent;
  let fixture: ComponentFixture<ScriptEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ScriptEditorComponent,
        TranslatePipe
      ],
      imports: [ 
        HttpClientTestingModule,
        MatDialogModule, 
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
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
