import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithValidationsShortHandComponent } from './demo-form-with-validations-short-hand.component';

describe('DemoFormWithValidationsShortHandComponent', () => {
  let component: DemoFormWithValidationsShortHandComponent;
  let fixture: ComponentFixture<DemoFormWithValidationsShortHandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormWithValidationsShortHandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithValidationsShortHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
