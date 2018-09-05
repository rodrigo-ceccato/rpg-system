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

  public generalView = false;
  public inventoryView = false;
  public combatView = false;
  public loreView = false;
  public mapView = true;

  toggleGeneralView(){
   this.generalView = !this.generalView ;
  }

  toggleInventoryView(){
   this.inventoryView = !this.inventoryView ;
  }

  toggleCombatView(){
   this.combatView = !this.combatView ;
  }
  
  toggleLoreView(){
   this.loreView = !this.loreView ;
  }
  
  toggleMapView(){
   this.mapView = !this.mapView ;
  }
}
