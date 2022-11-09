import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { EnumToArrayPipe } from '../../../_helpers/utils';

import {FlexEventComponent} from './flex-event.component';

describe('FlexEventComponent', () => {
  let component: FlexEventComponent;
  let fixture: ComponentFixture<FlexEventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        EnumToArrayPipe,
        FlexEventComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
