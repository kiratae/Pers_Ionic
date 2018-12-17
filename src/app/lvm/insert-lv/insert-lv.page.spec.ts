import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertLvPage } from './insert-lv.page';

describe('InsertLvPage', () => {
  let component: InsertLvPage;
  let fixture: ComponentFixture<InsertLvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertLvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertLvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
