import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSFlexboxComponent } from './cssflexbox.component';

describe('CSSFlexboxComponent', () => {
  let component: CSSFlexboxComponent;
  let fixture: ComponentFixture<CSSFlexboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSSFlexboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSFlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
