import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-player-lore',
  templateUrl: './player-lore.component.html',
  styleUrls: ['./player-lore.component.css']
})
export class PlayerLoreComponent implements OnInit {

  constructor(public Player: PlayerDataService) { }

  ngOnInit() {
  }

}
