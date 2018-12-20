import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertChoIncorrectPage } from './insert-cho-incorrect.page';

describe('InsertChoIncorrectPage', () => {
  let component: InsertChoIncorrectPage;
  let fixture: ComponentFixture<InsertChoIncorrectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertChoIncorrectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertChoIncorrectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
