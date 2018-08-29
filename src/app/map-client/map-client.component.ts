import { Component, OnInit } from '@angular/core';
import { MapProviderService } from '../map-provider.service';

@Component({
  selector: 'app-map-client',
  templateUrl: './map-client.component.html',
  styleUrls: ['./map-client.component.css']
})
export class MapClientComponent implements OnInit {

  constructor(public Map:MapProviderService) {

   }

  ngOnInit() {
  }

}
