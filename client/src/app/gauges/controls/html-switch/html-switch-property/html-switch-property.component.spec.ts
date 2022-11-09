/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HtmlSwitchPropertyComponent } from './html-switch-property.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('HtmlSwitchPropertyComponent', () => {
  let component: HtmlSwitchPropertyComponent;
  let fixture: ComponentFixture<HtmlSwitchPropertyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlSwitchPropertyComponent ],
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
    fixture = TestBed.createComponent(HtmlSwitchPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
