/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SvgSelectorComponent } from './svg-selector.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

describe('SvgSelectorComponent', () => {
  let component: SvgSelectorComponent;
  let fixture: ComponentFixture<SvgSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SvgSelectorComponent,
        TranslatePipe
      ],
      imports: [ 
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
