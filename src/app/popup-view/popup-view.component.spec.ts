import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupViewComponent } from './popup-view.component';

describe('PopupViewComponent', () => {
  let component: PopupViewComponent;
  let fixture: ComponentFixture<PopupViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
