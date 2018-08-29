import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHostComponent } from './map-host.component';

describe('MapHostComponent', () => {
  let component: MapHostComponent;
  let fixture: ComponentFixture<MapHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
