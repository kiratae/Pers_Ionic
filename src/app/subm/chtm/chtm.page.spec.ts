import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChtmPage } from './chtm.page';

describe('ChtmPage', () => {
  let component: ChtmPage;
  let fixture: ComponentFixture<ChtmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChtmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChtmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
