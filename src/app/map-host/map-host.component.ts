import { Component, OnInit } from '@angular/core';
import { MapProviderService } from '../map-provider.service';

@Component({
  selector: 'app-map-host',
  templateUrl: './map-host.component.html',
  styleUrls: ['./map-host.component.css']
})
export class MapHostComponent implements OnInit {
  public selectedTile;
  public tableW;
  public tableH;
  public peerHostId = 'loading ID...';
  public peer;

  constructor(public Map:MapProviderService) {
    //get variables from provider
    this.selectedTile = this.Map.selectedTile;
    this.tableW = this.Map.tableW;
    this.tableH = this.Map.tableH;
    this.peerHostId = this.Map.peerServerId;

    //open 'serving' peer
    this.peer = new Peer();
    this.peer.on('open', function (id) {
      console.log('My peer ID is: ' + id);
    });
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

  moveMe(){
    this.Map.moveMe();
  }

  sendData(){
    var conn = this.peer.connect();
    this.peer.on('connection', function(conn) { 
     
     });
    
      // Send messages
      conn.send('Hello!');
      console.log('send data');

    });
  
  }
}
