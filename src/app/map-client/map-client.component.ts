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
    let info = '00';
    var conn = this.peer.connect(this.DestionationPeerId);
    this.peer.on('connection', function(conn) { 
     
     });

     conn.on('open', function() {
      // Receive messages
      conn.on('data', function(data) {
        console.log('Received', data);
        info = data;
      });

    });

    setInterval(() => info, 1000);

  }

}
