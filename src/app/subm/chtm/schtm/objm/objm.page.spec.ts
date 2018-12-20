import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjmPage } from './objm.page';

describe('ObjmPage', () => {
  let component: ObjmPage;
  let fixture: ComponentFixture<ObjmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
