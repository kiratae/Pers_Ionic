import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchtmInsertPage } from './schtm-insert.page';

describe('SchtmInsertPage', () => {
  let component: SchtmInsertPage;
  let fixture: ComponentFixture<SchtmInsertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchtmInsertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchtmInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
