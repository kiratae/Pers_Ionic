import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchtmPage } from './edit-schtm.page';

describe('EditSchtmPage', () => {
  let component: EditSchtmPage;
  let fixture: ComponentFixture<EditSchtmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSchtmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSchtmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
