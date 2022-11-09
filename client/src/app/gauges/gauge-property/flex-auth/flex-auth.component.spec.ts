/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlexAuthComponent } from './flex-auth.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

describe('FlexAuthComponent', () => {
  let component: FlexAuthComponent;
  let fixture: ComponentFixture<FlexAuthComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FlexAuthComponent,
        TranslatePipe
      ],
      imports: [ 
        MatDialogModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
