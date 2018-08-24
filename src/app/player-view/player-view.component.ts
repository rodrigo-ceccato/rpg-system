import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';


@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})

export class PlayerViewComponent implements OnInit {
  constructor(public Player: PlayerDataService) { }

  ngOnInit() {
  }

  
}
