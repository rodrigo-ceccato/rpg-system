import { Injectable } from '@angular/core';

@Injectable()

export class PlayerDataService {

  player = <any>{};

  constructor() {
    this.player.name = 'robsonion';

    this.player.history = ["Nasceu", "Comeu", "se aventurou pela florseta xd"];
    this.player.skills = [{
      editable: false,
      formula: "1d4 + 4",
      hpCost: 0,
      spCost: 0,
      staCost: 0,
      name: "Iniciativa"}
    ];

    this.player.maxHealth = 50;
    this.player.maxMana = 10;
    this.player.maxSta = 10;
    this.player.health = 10;
    this.player.mana = 10;
    this.player.sta = 10;

    this.player.dex = 4;
    this.player.int = 1;
    this.player.con = 1;
    this.player.spt = 1;
    this.player.car = 3;
    this.player.det = 2;

    this.player.evasion = 30;
    this.player.armor = 30;
    this.player.dmg = 1;
  }
}
