import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchtmPage } from './schtm.page';

describe('SchtmPage', () => {
  let component: SchtmPage;
  let fixture: ComponentFixture<SchtmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchtmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchtmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
