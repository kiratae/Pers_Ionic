import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObjmPage } from './edit-objm.page';

describe('EditObjmPage', () => {
  let component: EditObjmPage;
  let fixture: ComponentFixture<EditObjmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditObjmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditObjmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
