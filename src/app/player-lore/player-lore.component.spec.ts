import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLoreComponent } from './player-lore.component';

describe('PlayerLoreComponent', () => {
  let component: PlayerLoreComponent;
  let fixture: ComponentFixture<PlayerLoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerLoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
