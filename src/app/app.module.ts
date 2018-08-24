import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {PlayerDataService} from './player-data.service';

import { AppComponent } from './app.component';
import { PlayerViewComponent } from './player-view/player-view.component';
import { PlayerEditSkillsComponent } from './player-edit-skills/player-edit-skills.component';
import { PlayerLoreComponent } from './player-lore/player-lore.component';
import { PlayerCombatComponent } from './player-combat/player-combat.component';
import { PlayerInventoryComponent } from './player-inventory/player-inventory.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerViewComponent,
    PlayerEditSkillsComponent,
    PlayerLoreComponent,
    PlayerCombatComponent,
    PlayerInventoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlayerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
