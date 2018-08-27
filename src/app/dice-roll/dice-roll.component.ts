import { Component, OnInit } from '@angular/core';
import { DiceLogicService } from '../dice-logic.service';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css']
})

export class DiceRollComponent implements OnInit {
  public rollInputExpression = "1d20 + 1";
  public rollNumericValue = 20;
  public parsedRoll = "1d20";

  constructor(public Dice: DiceLogicService) { }

  ngOnInit() { }

  parseRollInput() {
    this.Dice.parseRoll(this.rollInputExpression);
    this.parsedRoll = this.Dice.parsedRoll;
    this.rollNumericValue = this.Dice.rollNumericValue;
  }    

}
