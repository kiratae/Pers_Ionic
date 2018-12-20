import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQtPage } from './update-qt.page';

describe('UpdateQtPage', () => {
  let component: UpdateQtPage;
  let fixture: ComponentFixture<UpdateQtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateQtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
