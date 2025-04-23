import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSGridLayoutComponent } from './cssgrid-layout.component';

describe('CSSGridLayoutComponent', () => {
  let component: CSSGridLayoutComponent;
  let fixture: ComponentFixture<CSSGridLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSSGridLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSGridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
