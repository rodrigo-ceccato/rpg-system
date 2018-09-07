import { Component, OnInit } from '@angular/core';
import { MapProviderService } from '../map-provider.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-map-host',
  templateUrl: './map-host.component.html',
  styleUrls: ['./map-host.component.css']
})
export class MapHostComponent implements OnInit {
  public selectedTile;
  public tableW;
  public tableH;
  private socket: SocketIOClient.Socket;
  public hostPort = 3000;
  public localIp:String = 'indefinido';

  constructor(public Map: MapProviderService) {
    //get variables from provider
    this.selectedTile = this.Map.selectedTile;
    this.tableW = this.Map.tableW;
    this.tableH = this.Map.tableH;
  }

  ngOnInit() {

  }

  toggleBlockTerrain() {
    let i = this.Map.selectedTile.i;
    let j = this.Map.selectedTile.j;

    this.Map.map[i][j].blocked = !this.Map.map[i][j].blocked;
  }

  generateMap() {
    this.Map.tableW = this.tableW;
    this.Map.tableH = this.tableH;
    this.Map.generateMap();
  }

  moveMe() {
    this.Map.moveMe();
  }

  sendData() {

  }

  startServing() {
    //starts emmiting the map info
    this.socket = io('http://localhost:' + String(this.hostPort));

    this.socket.on('connectionInfo', function (msg) {
      this.localIp = msg;
    }.bind(this));

    this.socket.emit('hostConnection');

    setInterval(() => {
      this.socket.emit('hostMapUpdate', this.Map.map);
    }, 1500);

    //handle player move
    this.socket.on('playerMove', function (msg) {
      console.log('Host processing player movment', msg.player);

      let i = msg.w;
      let j = msg.h;
      let oldI=msg.player.lastPosition.i;
      let oldJ=msg.player.lastPosition.j;

      //if the tile doesnt have a vision array
      //create an empty one
      if (!this.Map.map[i][j].inVision) {
        this.Map.map[i][j].inVision = [];
        console.log('Inicialized vision array at tile', i, j);
      }

      //remove the player from the previus tile
      let targetTile = this.Map.map[oldI][oldJ].inVision;

      if(targetTile === undefined) {
        targetTile = [];
        console.log('Previous tile was empty. Now inicialized');

      } else {
        
        let playerName = msg.player.name;
        let indexOfPlayer = targetTile.indexOf(playerName);

        console.log('About to move player', playerName);
        console.log('Searching at tile:', oldI, oldJ);

        if(indexOfPlayer != -1) {
          targetTile.splice(indexOfPlayer, 1);
        }

        
      }

      //puts player on new cell
      this.Map.map[i][j].inVision.push(msg.player.name);

    }.bind(this));

    //handle player selection
    this.socket.on('playerSelection', function (msg) {
      console.log('Processing player ping...', msg.player);
      this.Map.map[msg.w][msg.h].pinged = true;

      // removes the ping after timeout
      setTimeout(function() { 
        this.Map.map[msg.w][msg.h].pinged = false;
       }.bind(this), 2500);

    }.bind(this));
  }

}
