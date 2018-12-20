import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertChtmPage } from './insert-chtm.page';

describe('InsertChtmPage', () => {
  let component: InsertChtmPage;
  let fixture: ComponentFixture<InsertChtmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertChtmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertChtmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
