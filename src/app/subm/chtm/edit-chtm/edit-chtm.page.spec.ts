import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChtmPage } from './edit-chtm.page';

describe('EditChtmPage', () => {
  let component: EditChtmPage;
  let fixture: ComponentFixture<EditChtmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChtmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChtmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
