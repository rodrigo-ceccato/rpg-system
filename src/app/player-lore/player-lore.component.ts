import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';



@Component({
  selector: 'app-player-lore',
  templateUrl: './player-lore.component.html',
  styleUrls: ['./player-lore.component.css']
})
export class PlayerLoreComponent implements OnInit {
  public textToEdit = " ";
  public index;

  public froalaOptions: Object = {
    placeholderText: 'Edite sua história aqui',
    charCounterCount: true,
    heightMax: 100,
    heightMin: 100,
    toolbarButtons: [
      'bold', 'italic', 'underline', 'strikeThrough', 
      '|', 
      'fontSize',
      '|', 'paragraphFormat', 'formatUL',
      'clearFormatting', '|', 'undo', 'redo']
  }

  constructor(public Player: PlayerDataService) { }

  ngOnInit() {
  }

  editThis(i){
    this.index = i;
  }

  closeEditor(){
    this.index = null;
  }

  newLore(){
    this.Player.player.history.push();
    this.index = this.Player.player.history.length ;
  }

  deleteLore(i){
    this.index = null;
    this.Player.player.history.splice(i, 1);
  }

}
