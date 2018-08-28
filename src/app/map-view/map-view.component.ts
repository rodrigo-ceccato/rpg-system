import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  public map = [[1,2],[3,4]];
  public selectedTile = {
    i: '0',
    j: '0'
  };

  constructor() { 
    
  }

  ngOnInit() {
  }

  selectTile(i, j){
    this.selectedTile.i = i;
    this.selectedTile.j = j;
  }

}
