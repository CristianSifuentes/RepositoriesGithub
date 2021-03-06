import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialog } from './popup.component';

describe('PopupComponent', () => {
  let component: Dialog;
  let fixture: ComponentFixture<Dialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
