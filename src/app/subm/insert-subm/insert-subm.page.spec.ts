import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSubmPage } from './insert-subm.page';

describe('InsertSubmPage', () => {
  let component: InsertSubmPage;
  let fixture: ComponentFixture<InsertSubmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertSubmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertSubmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
