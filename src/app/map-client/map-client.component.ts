import { Component, OnInit } from '@angular/core';
import { MapProviderService } from '../map-provider.service';

@Component({
  selector: 'app-map-client',
  templateUrl: './map-client.component.html',
  styleUrls: ['./map-client.component.css']
})
export class MapClientComponent implements OnInit {

  public peer = new Peer();

  public DestionationPeerId = '0';

  constructor(public Map:MapProviderService) {


   }

  ngOnInit() {
  }

  getData(){
    var conn = this.peer.connect('another-peers-id');
    // on open will be launch when you successfully connect to PeerServer
    conn.on('open', function(){
      // here you have conn.id
      conn.send('hi!');
    });

  }

}
