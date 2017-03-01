/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XyzComponent } from './xyz.component';

describe('XyzComponent', () => {
  let component: XyzComponent;
  let fixture: ComponentFixture<XyzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XyzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XyzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
