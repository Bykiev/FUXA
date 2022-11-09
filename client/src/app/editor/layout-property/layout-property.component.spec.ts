import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { EnumToArrayPipe } from '../../_helpers/utils';

import { LayoutPropertyComponent } from './layout-property.component';

describe('LayoutPropertyComponent', () => {
  let component: LayoutPropertyComponent;
  let fixture: ComponentFixture<LayoutPropertyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LayoutPropertyComponent,
        EnumToArrayPipe
     ],
      imports: [ 
        HttpClientTestingModule,
        MatDialogModule, 
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
    fixture = TestBed.createComponent(LayoutPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
