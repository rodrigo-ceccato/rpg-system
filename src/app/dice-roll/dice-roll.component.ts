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

  ngOnInit() { 
    // roll a d20 when you open the app :)
    this.Dice.parseRoll(this.rollInputExpression);
  }

  parseRollInput() {
    this.Dice.parseRoll(this.rollInputExpression);
  }    

}
