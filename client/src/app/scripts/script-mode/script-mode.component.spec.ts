/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { EnumToArrayPipe } from '../../_helpers/utils';
import { ScriptModeComponent } from './script-mode.component';

describe('ScriptModeComponent', () => {
  let component: ScriptModeComponent;
  let fixture: ComponentFixture<ScriptModeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        EnumToArrayPipe,
        ScriptModeComponent,
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
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
