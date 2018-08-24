import { Injectable } from '@angular/core';

@Injectable()

export class PlayerDataService {

  player = <any>{};

  constructor() { 
    this.player.name = 'robsonion';
    this.player.history = ["Nasceu", "Comeu", "se aventurou pela florseta xd"];
  }


}
