import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {PlayerDataService} from './player-data.service';
import {DiceLogicService} from './dice-logic.service';

import { AppComponent } from './app.component';
import { PlayerViewComponent } from './player-view/player-view.component';
import { PlayerEditSkillsComponent } from './player-edit-skills/player-edit-skills.component';
import { PlayerLoreComponent } from './player-lore/player-lore.component';
import { PlayerCombatComponent } from './player-combat/player-combat.component';
import { PlayerInventoryComponent } from './player-inventory/player-inventory.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { MapViewComponent } from './map-view/map-view.component';
import { MapHostComponent } from './map-host/map-host.component';
import { MapClientComponent } from './map-client/map-client.component';
import { MapProviderService } from './map-provider.service';
import { SettingsViewComponent } from './settings-view/settings-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerViewComponent,
    PlayerEditSkillsComponent,
    PlayerLoreComponent,
    PlayerCombatComponent,
    PlayerInventoryComponent,
    DiceRollComponent,
    MapViewComponent,
    MapHostComponent,
    MapClientComponent,
    SettingsViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PlayerDataService,
    DiceLogicService,
    MapProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
