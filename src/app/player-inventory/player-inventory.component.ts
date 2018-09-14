import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-player-inventory',
  templateUrl: './player-inventory.component.html',
  styleUrls: ['./player-inventory.component.css']
})
export class PlayerInventoryComponent implements OnInit {

  constructor(public Player:PlayerDataService) { }

  ngOnInit() {
  }

}
