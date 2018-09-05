import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';
import { MapProviderService } from '../map-provider.service';
import { truncate } from 'fs';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  public serveMap = false;
  public clientMap = false;

  public localIp = "0.0.0.0"

  public map = [[]];
  public selectedTile = { i: '0', j: '0' };

  constructor(public Map: MapProviderService) {
    //get the map from provider
    this.selectedTile = this.Map.selectedTile;

    //TODO: change this to update only when needed
    setInterval(() => this.updateMap(), 250);

    this.map = this.Map.map;
  }

  ngOnInit() {

  }

  updateMap() {
    this.map = this.Map.map;
  }

  // toggle if we are hosting or acessing a map
  startMapServer() {
    this.serveMap = true;
  }

  startMapClient() {
    this.clientMap = true;
  }

  // allow the user to select a tile
  // the info in send to the provider
  selectTile(i, j) {
    this.selectedTile.i = i;
    this.selectedTile.j = j;
  }

}
