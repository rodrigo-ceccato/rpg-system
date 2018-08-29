import { Injectable } from '@angular/core';
import { PlayerDataService } from './player-data.service';

@Injectable()
export class MapProviderService {

  public map = [[]];

  public selectedTile = {
    i: '0',
    j: '0'
  };

  public tableW = 4;
  public tableH = 4;

  public peerServerId = '0';

  //need to remeber where player was,
  //so we can remove when moving
  playerLastPositionI = '0';
  playerLastPositionJ = '0';

  constructor(public Player: PlayerDataService) {

    this.generateMap();
  }

  generateMap() {
    let newMap = new Array();

    for (let i = 0; i < this.tableH; i++) {
      newMap[i] = new Array();

      for (let j = 0; j < this.tableW; j++) {
        newMap[i][j] = {
          'blocked': false,
          'inVision': []
        };
      }
    }

    this.map = newMap;
    console.log("generated new map", this.map);
  }

  moveMe() {
    let i = this.selectedTile.i;
    let j = this.selectedTile.j;

    //move the player
    if (!this.map[i][j].inVision) {
      this.map[i][j].inVision = [];
    }

    this.map[i][j].inVision.push(this.Player.player.name);

    //remove from last position
    let playerNametoBeMoved = this.Player.player.name;
    let targetTile = this.map[this.playerLastPositionI][this.playerLastPositionJ].inVision;
    let indexOfPlayerOnPreviusTile = targetTile.indexOf(playerNametoBeMoved);

    if (indexOfPlayerOnPreviusTile != -1) {
      targetTile.splice(indexOfPlayerOnPreviusTile, 1);
    }

    //update last position
    this.playerLastPositionI = i;
    this.playerLastPositionJ = j;
  }



}
