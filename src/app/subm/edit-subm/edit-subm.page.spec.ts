import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubmPage } from './edit-subm.page';

describe('EditSubmPage', () => {
  let component: EditSubmPage;
  let fixture: ComponentFixture<EditSubmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
