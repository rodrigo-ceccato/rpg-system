import { Injectable } from '@angular/core';
import { DiceLogicService } from './dice-logic.service';

@Injectable()

export class PlayerDataService {

  player = <any>{};

  constructor(public Dice:DiceLogicService) {
    this.player.name = 'robsonion';

    this.player.history = [
      {
        content: "Lorem ipsum praesent lectus ac a et turpis, arcu vestibulum aenean lacus pretium dapibus dui, pretium rutrum sagittis lorem egestas lorem. Porta sem eros pretium etiam feugiat lacus, urna netus porta velit ut taciti ut, mollis ornare leo est duis. enim fringilla quis ante libero tellus praesent morbi suspendisse, odio elit integer vestibulum dictum congue. interdum ligula porta aliquam fames dui ultricies placerat, nostra ultrices urna tortor semper condimentum, faucibus erat pretium curabitur ut mattis. pharetra metus sit semper netus ultricies ipsum gravida tempor eros primis, enim eros duis nunc curae purus a ullamcorper convallis, ullamcorper leo suspendisse vel ipsum purus mollis enim placerat. ", 
        editable: true
      },
      {
        content: "Lorem ipsum praesent lectus ac a et turpis, arcu vestibulum aenean lacus pretium dapibus dui, pretium rutrum sagittis lorem egestas lorem. Porta sem eros pretium etiam feugiat lacus, urna netus porta velit ut taciti ut, mollis ornare leo est duis. enim fringilla quis ante libero tellus praesent morbi suspendisse, odio elit integer vestibulum dictum congue. interdum ligula porta aliquam fames dui ultricies placerat, nostra ultrices urna tortor semper condimentum, faucibus erat pretium curabitur ut mattis. pharetra metus sit semper netus ultricies ipsum gravida tempor eros primis, enim eros duis nunc curae purus a ullamcorper convallis, ullamcorper leo suspendisse vel ipsum purus mollis enim placerat. ", 
        editable: false
      }
    ];
    
    this.player.lastPosition = {
      i: 0,
      j: 0
    }

    this.player.skills = [
      {
        editable: false,
        formula: "1d4 + 4",
        rollResult: "4",
        hpCost: 0,
        spCost: 0,
        staCost: 0,
        formulaAlaias: '@INIT',
        name: "Iniciativa"
      },
      {
        editable: false,
        formula: "1d4 + 4 + @INIT",
        rollResult: "4",
        hpCost: 0,
        spCost: 0,
        staCost: 0,
        formulaAlaias: '@ATKINIT',
        name: "Ataque de Iniciativa"
      }
    ];
    
    this.player.maxHealth = 50;
    this.player.maxMana = 10;
    this.player.maxSta = 10;
    this.player.health = 10;
    this.player.mana = 10;
    this.player.sta = 10;

    this.player.evasion = 30;
    this.player.armor = 30;
    this.player.dmg = 1;

    this.player.attributes = [
      {
        name: "Inteligência",
        formula: "1d4",
        formulaAlaias: '@INT',
        value: 4,
        valueAlaias: '@INTV',
        rollResult: 0
      },
      {
        name: "Destreza",
        formula: "1d4",
        formulaAlaias: '@DEX',
        value: 4,
        valueAlaias: '@DEXV',
        rollResult: 0
      },
      {
        name: "Constituição",
        formula: "1d4",
        formulaAlaias: '@CON',
        valueAlaias: '@DEXV',
        value: 4,
        rollResult: 0
      },
      {
        name: "Espírito",
        formula: "1d4",
        formulaAlaias: '@ESP',
        valueAlaias: '@ESPV',
        value: 4,
        rollResult: 0
      },
      {
        name: "Carisma",
        formula: "1d4",
        formulaAlaias: '@CAR',
        valueAlaias: '@CARV',
        value: 4,
        rollResult: 0
      },
      {
        name: "Determinação",
        formula: "1d4",
        formulaAlaias: '@DET',
        valueAlaias: '@DETV',
        value: 4,
        rollResult: 0
      }
    ]; 
  }

  parseSkillFormula(skillId){
    let skill = this.player.skills[skillId];
    let formula = skill.formula;
    this.parseFormula(formula);

    //takes player cost of the skill
    this.player.health -= skill.hpCost;
    this.player.mana -= skill.spCost;
    this.player.sta -= skill.staCost;

    //save the roll result at the formula field
    skill.rollResult = this.Dice.rollNumericValue;
  }

  //TODO: refactor this PARSER
  // this function parse the formulas that use
  // other skills as input
  parseFormula(formula){
    let pattern = "[+ | -]\\s+@[a-z|A-Z ]+";

    //get all the const in formula
    let formulaRemain = formula;
    let constNames = [];
    while(formulaRemain.match(pattern) != null) {
      //add ocurrence
      constNames.push(formulaRemain.match(pattern)[0]);

      //remove from input so we get next ocurrence
      formulaRemain = formulaRemain.replace(constNames[constNames.length-1], '');
    }

    //remove whitespace from consts
    for (let i in constNames) constNames[i] = constNames[i].replace(/\s/g,'');
    
    //get what cons are to add and what are to substract
    let addConsAlaias = [];
    let subConsAlaias = [];

    for(let item of constNames) {
      if(item[0] == '-') {
        subConsAlaias.push(item.substring(1, item.length));

      } else if(item[0] == '+') {
        addConsAlaias.push(item.substring(1, item.length));

      } else if(item[0] == '@') {
        addConsAlaias.push(item.substring(1, item.length));
      }
    }

    //get the values of the mentioned rolls
    let value = 0;

    function contains(a, obj) {
      for (var i = 0; i < a.length; i++) {
          if (a[i] === obj) {
              return true;
          }
      }
      return false;
  }

    //get rolls result from atributes
    for(let item of this.player.attributes) {   
      //values from atributes rolls
      if(contains(addConsAlaias, item.formulaAlaias)) value += Number(item.rollResult);
      if(contains(subConsAlaias, item.formulaAlaias)) value -= Number(item.rollResult);

      //values from atributes values
      if(contains(addConsAlaias, item.valueAlaias)) value += Number(item.value);
      if(contains(subConsAlaias, item.valueAlaias)) value -= Number(item.value);
    }

    //get rolls result from skills
    for(let item of this.player.skills){
      if(contains(addConsAlaias, item.formulaAlaias)) value += Number(item.rollResult);
      if(contains(subConsAlaias, item.formulaAlaias)) value -= Number(item.rollResult);
    }

    //generate our new formula
    let temporaryFormula:String;

    if(Number(value) > 0) {
      temporaryFormula = formulaRemain + ' + ' + String(value);

    } else if(Number(value) < 0) {
      temporaryFormula = formulaRemain + ' - ' + String((-1)*value);

    } else if(Number(value) == 0) {
      temporaryFormula = formulaRemain;
    }

    //checks if an alaias was left un-met
    //TODO: add more functionality to this checker
    if(contains(temporaryFormula, '@')) {
      console.log("Error, not goint to roll...");
      console.log("Alaias un-met!");
      console.log(temporaryFormula);

    } else {
      //roll the dice =)
      this.Dice.parseRoll(temporaryFormula);
      console.log(temporaryFormula);
    }

    
  }
}
