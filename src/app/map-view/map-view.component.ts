import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  public map = [[]];
  public selectedTile = {
    i: '0',
    j: '0'
  };

  public tableW = 4;
  public tableH = 4;

  //need to remeber where player was,
  //so we can remove when moving
  playerLastPositionI = '0';
  playerLastPositionJ = '0';

  constructor(public Player:PlayerDataService) {  }

  ngOnInit() {
  }

  selectTile(i, j){
    this.selectedTile.i = i;
    this.selectedTile.j = j;
  }

  generateMap(){
    let newMap = new Array();

    for (let i = 0; i < this.tableH; i++) {
      newMap[i] = new Array();

      for(let j = 0; j < this.tableW; j++){
        newMap[i][j] = {
          'blocked': false,
          'inVision': []
        };
      }
    }

    this.map = newMap;
  }

  moveMe(){
    let i = this.selectedTile.i;
    let j = this.selectedTile.j;

    //move the player
    if(!this.map[i][j].inVision) {
      this.map[i][j].inVision = [];
    }

    this.map[i][j].inVision.push(this.Player.player.name);

    //remove from last position
    let playerNametoBeMoved = this.Player.player.name;
    let targetTile = this.map[this.playerLastPositionI][this.playerLastPositionJ].inVision;
    let indexOfPlayerOnPreviusTile =  targetTile.indexOf(playerNametoBeMoved);

    if(indexOfPlayerOnPreviusTile != -1) {
      targetTile.splice(indexOfPlayerOnPreviusTile, 1);
    }


    //update last position
    this.playerLastPositionI = i;
    this.playerLastPositionJ = j;
  }

  toggleBlockTerrain(){
    let i = this.selectedTile.i;
    let j = this.selectedTile.j;

    this.map[i][j].blocked = !this.map[i][j].blocked;
  }

 

}
