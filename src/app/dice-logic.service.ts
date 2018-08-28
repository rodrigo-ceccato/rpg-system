import { Injectable } from '@angular/core';
import { Dice } from 'dice-typescript';

@Injectable()
export class DiceLogicService {

  // ṭhis will hold the result of the pase
  // public, so every module can acess directly
  public parsedRoll;
  public rollNumericValue;

  public dice = new Dice();

  constructor() { }

  parseRoll(rollInputExpression) {
    console.log(this.dice.roll(rollInputExpression).errors);
    this.parsedRoll = this.dice.roll(rollInputExpression).renderedExpression;
    this.rollNumericValue = this.dice.roll(this.parsedRoll).total;
  }

}
