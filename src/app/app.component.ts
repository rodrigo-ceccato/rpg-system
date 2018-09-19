import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RPG System';

  public version: string = environment.VERSION;

  public generalView = true;
  public inventoryView = false;
  public combatView = false;
  public loreView = false;
  public mapView = false;
  public settingsView = false;

  toggleGeneralView() {
    this.closeViews();
    this.generalView = true;
  }

  toggleInventoryView() {
    this.closeViews();
    this.inventoryView = true;
  }

  toggleCombatView() {
    this.closeViews();
    this.combatView = true;
  }

  toggleLoreView() {
    this.closeViews();
    this.loreView = true;
  }

  toggleMapView() {
    this.closeViews();
    this.mapView = true;
  }

  toggleSettingView() {
    this.closeViews();
    this.settingsView = true;
  }

  closeViews() {
    this.generalView = false;
    this.inventoryView = false;
    this.combatView = false;
    this.loreView = false;
    this.mapView = false;
    this.settingsView = false;
  }
}
