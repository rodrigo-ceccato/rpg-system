import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css']
})
export class DiceRollComponent implements OnInit {
  public rollInputExpression = "1d20 + 1";
  public rollNumericValue = 20;
  public parsedRoll = "1d20";

  constructor() { }

  ngOnInit() {
  }

  parseRollInput() {
    let checker = true;
    let constNumber = 0;
    let diceNumber = 0;
    let outPutString = [];

    let rollTokens = this.rollInputExpression.split(/[ ]+/);
    
    for (let token of rollTokens) {
      let auxToken = token.split('d');

      // number or operator
      if (auxToken.length == 1) {
        let testingToken = auxToken[0];

        if (testingToken == '+') {

        } else if (testingToken == '-') {

          //TODO fix this check
        } else if (true) {
          constNumber += Number(testingToken);

        // } else {
        //   checker = false;
         }
      }

      // dice rolled n times
      else if (auxToken.length == 2) {
        let diceMaxValue = Number(auxToken[1]);
        outPutString.push('( ');

        for (let i = 0; i < Number(auxToken[0]); i++) {
          let oneRoll = this.getRandomInt(1, diceMaxValue);
          diceNumber += oneRoll;
          outPutString.push(oneRoll);
          outPutString.push(' ');
        }
        outPutString.push(')');
        outPutString.push(' ');

      } else {
        checker = false;
      }
    }

    if (checker) {
      let total = constNumber + diceNumber;

      this.parsedRoll = outPutString.join('') + ' + ' + constNumber;
      this.rollNumericValue = total;
    }

  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
