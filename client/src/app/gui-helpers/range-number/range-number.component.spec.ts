/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RangeNumberComponent } from './range-number.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

describe('RangeNumberComponent', () => {
  let component: RangeNumberComponent;
  let fixture: ComponentFixture<RangeNumberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        RangeNumberComponent,
        TranslatePipe
     ],
     imports: [
        TranslateModule.forRoot()
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
