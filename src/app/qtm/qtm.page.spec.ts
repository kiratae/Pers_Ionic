import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QTMPage } from './qtm.page';

describe('QTMPage', () => {
  let component: QTMPage;
  let fixture: ComponentFixture<QTMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QTMPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QTMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
