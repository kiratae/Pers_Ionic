import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertQTPage } from './insert-qt.page';

describe('InsertQTPage', () => {
  let component: InsertQTPage;
  let fixture: ComponentFixture<InsertQTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertQTPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertQTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
