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

  editThis(i){
    this.Player.player.history[i].editable = !this.Player.player.history[i].editable;
  }

  newLore(){
    this.Player.player.history.push({content: 'nova lore', editable: true});
  }

  deleteLore(i){
    this.Player.player.history.splice(i, 1);
  }

}
