import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.css']
})
export class SettingsViewComponent implements OnInit {

  constructor(public Player: PlayerDataService) { }

  ngOnInit() {
  }

  exportCsv() {
    var objectToCSVRow = function (dataObject) {
      var dataArray = new Array;
      for (var o in dataObject) {
        var innerValue = dataObject[o] === null ? '' : dataObject[o].toString();
        var result = innerValue.replace(/"/g, '""');
        result = '"' + result + '"';
        dataArray.push(result);
      }
      return dataArray.join(' ') + '\r\n';
    }

    var exportToCSV = function (arrayOfObjects, playerName) {

      if (!arrayOfObjects.length) {
        return;
      }

      var csvContent = "data:text/csv;charset=utf-8,";

      // headers
      csvContent += objectToCSVRow(Object.keys(arrayOfObjects[0]));

      arrayOfObjects.forEach(function (item) {
        csvContent += objectToCSVRow(item);
      });

      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", playerName + "_sheet" + ".csv");
      document.body.appendChild(link); // Required for FF
      console.log('Starting download...');
      link.click();
      document.body.removeChild(link);
    }

    console.log('About to start export...');
    exportToCSV([
      {
        name: this.Player.player.name,
        hp: this.Player.player.maxHealth,
        sp: this.Player.player.maxMana,
        sta: this.Player.player.maxSta
      },
      this.Player.player.attributes,
      this.Player.player.skills
    ], this.Player.player.name);


  }

}
