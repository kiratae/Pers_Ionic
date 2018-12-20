import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoModalPage } from './cho-modal/cho-modal.page';

describe('ChoModalPage', () => {
  let component: ChoModalPage;
  let fixture: ComponentFixture<ChoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
