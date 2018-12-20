import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertObjPage } from './insert-obj.page';

describe('InsertObjPage', () => {
  let component: InsertObjPage;
  let fixture: ComponentFixture<InsertObjPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertObjPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertObjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
