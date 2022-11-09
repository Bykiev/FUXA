/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

import {FlexVariableComponent} from './flex-variable.component';

describe('FlexVariableComponent', () => {
  let component: FlexVariableComponent;
  let fixture: ComponentFixture<FlexVariableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlexVariableComponent,
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
    fixture = TestBed.createComponent(FlexVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
