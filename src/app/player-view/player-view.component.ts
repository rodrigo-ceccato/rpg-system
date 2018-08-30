import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';
import { DiceLogicService } from '../dice-logic.service';


@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})

export class PlayerViewComponent implements OnInit {
  
  public showPhoto = true;
  public attributeEdit = false;

  constructor(public Player: PlayerDataService, public Dice: DiceLogicService) { }

  ngOnInit() {
  }

  togglePhoto(){
    this.showPhoto = !this.showPhoto;
  }

  addNewAttribute(){
    this.Player.player.attributes.push({
      name: "Novo atributo",
      formula: "",
      formulaAlaias: ''
    });
    this.attributeEdit = true;
  }

  editAttributes(){
    this.attributeEdit = !this.attributeEdit;
  }

  rollAttributeTest(i){
    this.Player.player.attributes[i].rollResult = this.Dice.parseRoll(this.Player.player.attributes[i].formula);
  }

  delAttribute(i){
    this.Player.player.attributes.splice(i, 1);
  }
  
}
