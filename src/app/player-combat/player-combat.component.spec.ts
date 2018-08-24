import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCombatComponent } from './player-combat.component';

describe('PlayerCombatComponent', () => {
  let component: PlayerCombatComponent;
  let fixture: ComponentFixture<PlayerCombatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCombatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
