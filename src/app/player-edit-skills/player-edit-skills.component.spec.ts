import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerEditSkillsComponent } from './player-edit-skills.component';

describe('PlayerEditSkillsComponent', () => {
  let component: PlayerEditSkillsComponent;
  let fixture: ComponentFixture<PlayerEditSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerEditSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerEditSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
