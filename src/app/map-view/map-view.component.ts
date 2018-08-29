import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';
import { MapProviderService } from '../map-provider.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  public serveMap = false;

  public map=[[]];
  public selectedTile = {i: '0', j: '0'};

  constructor(public Map: MapProviderService) {
    //get the map from provider
    this.selectedTile = this.Map.selectedTile;
    this.map = this.Map.map;
  }

  ngOnInit() {
  }

  // toggle if we are hosting or acessing a map
  toggleServeMap(){
    this.serveMap = !this.serveMap;
  }

  // allow the user to select a tile
  // the info in send to the provider
  selectTile(i, j) {
    this.selectedTile.i = i;
    this.selectedTile.j = j;
  }

}
