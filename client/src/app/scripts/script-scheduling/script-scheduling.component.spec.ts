/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScriptSchedulingComponent } from './script-scheduling.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

describe('ScriptSchedulingComponent', () => {
  let component: ScriptSchedulingComponent;
  let fixture: ComponentFixture<ScriptSchedulingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ScriptSchedulingComponent,
        TranslatePipe
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
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
    fixture = TestBed.createComponent(ScriptSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
