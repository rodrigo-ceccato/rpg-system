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

  startServing(){
    //starts emmiting the map info
    this.socket = io('http://localhost:' + String(this.hostPort));
    setInterval(() => {
      this.socket.emit('hostMapUpdate', this.Map.map);
    }, 250);
  }
}
