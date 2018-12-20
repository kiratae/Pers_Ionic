import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertChoCorrectPage } from './insert-cho-correct.page';

describe('InsertChoCorrectPage', () => {
  let component: InsertChoCorrectPage;
  let fixture: ComponentFixture<InsertChoCorrectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertChoCorrectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertChoCorrectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
