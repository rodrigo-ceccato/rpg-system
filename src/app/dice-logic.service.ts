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
    let roll = this.dice.roll(rollInputExpression);
    this.parsedRoll = roll.renderedExpression;
    this.rollNumericValue = roll.total;

    return this.rollNumericValue;
  }

}
