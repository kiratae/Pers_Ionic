import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmPage } from './subm.page';

describe('SubmPage', () => {
  let component: SubmPage;
  let fixture: ComponentFixture<SubmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
