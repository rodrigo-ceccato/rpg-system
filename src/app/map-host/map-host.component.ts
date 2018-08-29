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

  constructor(public Map:MapProviderService) {
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
    this.Map.generateMap();
  }

  moveMe(){
    this.Map.moveMe();
  }
}
