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

  constructor(public Map: MapProviderService) {
    //get variables from provider
    this.selectedTile = this.Map.selectedTile;
    this.tableW = this.Map.tableW;
    this.tableH = this.Map.tableH;
    this.peerHostId = this.Map.peerServerId;
  }

  

  ngOnInit() {
    var peer = new Peer({key: 'lwjd5qra8257b9'});

    peer.on('open', function(id) {
      console.log('My peer ID is: ' + id);
    });

    var conn = peer.connect('another-peers-id');
    // on open will be launch when you successfully connect to PeerServer
    conn.on('open', function(){
      // here you have conn.id
      conn.send('hi!');
    });

    peer.on('connection', function(conn) {
      conn.on('data', function(data){
        // Will print 'hi!'
        console.log(data);
      });
    });

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
}
