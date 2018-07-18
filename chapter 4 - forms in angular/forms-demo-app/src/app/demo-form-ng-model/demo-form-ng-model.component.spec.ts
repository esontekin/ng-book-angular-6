import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormNgModelComponent } from './demo-form-ng-model.component';

describe('DemoFormNgModelComponent', () => {
  let component: DemoFormNgModelComponent;
  let fixture: ComponentFixture<DemoFormNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormNgModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
