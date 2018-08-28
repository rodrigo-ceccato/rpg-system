import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';
import { DiceLogicService } from '../dice-logic.service';

@Component({
  selector: 'app-player-combat',
  templateUrl: './player-combat.component.html',
  styleUrls: ['./player-combat.component.css']
})
export class PlayerCombatComponent implements OnInit {

  constructor(public Player:PlayerDataService, public Dice:DiceLogicService) { }

  ngOnInit() { }

  addSkill(){
    let newSkill = {
      editable: true,
      formula: "1d10",
      hpCost: 0,
      spCost: 0,
      staCost: 0,
      name: "NovaSkill",
      rollResult: 0
    }

    this.Player.player.skills.push(newSkill);
  }

  editSkill(skillId) {
    this.Player.player.skills[skillId].editable = true;
  }

  saveSkill(skillId) {
    this.Player.player.skills[skillId].editable = false;
  }

  rollSkillFormula(skillId){
    let skill = this.Player.player.skills[skillId];
    this.Dice.parseRoll(skill.formula);
    skill.rollResult = this.Dice.rollNumericValue;
  }

  deleteSkill(skillId){
    this.Player.player.skills.splice(skillId, 1);

  }

}
