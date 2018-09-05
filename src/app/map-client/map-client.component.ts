import { Component, OnInit } from '@angular/core';
import { MapProviderService } from '../map-provider.service';
import * as io from 'socket.io-client';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-map-client',
  templateUrl: './map-client.component.html',
  styleUrls: ['./map-client.component.css']
})
export class MapClientComponent implements OnInit {
  private socket: SocketIOClient.Socket;
  public hostIp: String;

  constructor(public Map: MapProviderService, public Player: PlayerDataService) { }

  ngOnInit() { }

  startConnection() {
    this.socket = io('http://' + this.hostIp);

    this.socket.on('mapUpdate', function getMapUpdate(msg) {
      this.Map.map = msg;

    }.bind(this));

  }


  moveToCell() {
    this.socket.emit('playerMove', { 
      //information needed to move
      player: this.Player.player, 
      w: this.Map.selectedTile.i, 
      h: this.Map.selectedTile.j
     });

    console.log('sending player move to server');

    //updates player position after sending to server
    this.Player.player.lastPosition.i = this.Map.selectedTile.i;
    this.Player.player.lastPosition.j = this.Map.selectedTile.j;
  }

  pingCell() {
    this.socket.emit('playerSelection', {
      player: this.Player.player, 
      w: this.Map.selectedTile.i, 
      h: this.Map.selectedTile.j
    });
  }
}
