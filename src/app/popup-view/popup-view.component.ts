import { Component, OnInit } from '@angular/core';
import { PopupHelpService } from '../popup-help.service';

@Component({
  selector: 'app-popup-view',
  templateUrl: './popup-view.component.html',
  styleUrls: ['./popup-view.component.css']
})
export class PopupViewComponent implements OnInit {

  constructor(public Popup: PopupHelpService) { }

  ngOnInit() { }

}
