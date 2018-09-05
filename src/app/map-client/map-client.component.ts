import { Component, OnInit } from '@angular/core';
import { MapProviderService } from '../map-provider.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-map-client',
  templateUrl: './map-client.component.html',
  styleUrls: ['./map-client.component.css']
})
export class MapClientComponent implements OnInit {
  private socket: SocketIOClient.Socket;
  public hostIp: String;

  constructor(public Map: MapProviderService) {

  }

  ngOnInit() {
  }

  startConnection() {
    this.socket = io('http://' + this.hostIp);

    this.socket.on('mapUpdate', function (msg) {
      console.log('Got from sv>', msg);
      this.Map.map = [[]];
    });
  }

  getData() {


  }

}
