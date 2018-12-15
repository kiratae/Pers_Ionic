import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertQTCho1Page } from './insert-qt-cho-1.page';

describe('InsertQuestionTwoPage', () => {
  let component: InsertQTCho1Page;
  let fixture: ComponentFixture<InsertQTCho1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertQTCho1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertQTCho1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
