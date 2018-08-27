import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {PlayerDataService} from './player-data.service';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


import { AppComponent } from './app.component';
import { PlayerViewComponent } from './player-view/player-view.component';
import { PlayerEditSkillsComponent } from './player-edit-skills/player-edit-skills.component';
import { PlayerLoreComponent } from './player-lore/player-lore.component';
import { PlayerCombatComponent } from './player-combat/player-combat.component';
import { PlayerInventoryComponent } from './player-inventory/player-inventory.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerViewComponent,
    PlayerEditSkillsComponent,
    PlayerLoreComponent,
    PlayerCombatComponent,
    PlayerInventoryComponent,
    DiceRollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [PlayerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
